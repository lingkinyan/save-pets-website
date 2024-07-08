import { Component } from "@angular/core";
import {
  FormArray,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { FormUpdate } from "../../../../common-components/function/form-update.component";

@Component({
  selector: "app-foster-form",
  standalone: false,
  templateUrl: "./foster-form.component.html",
  styleUrl: "./foster-form.component.less",
})
export class FosterFormComponent {
  constructor(private fb: NonNullableFormBuilder, private title: Title) {
    this.title.setTitle("Foster Application Form | Pet Save");
  }

  petTypeList = ["Dog", "Cat"];

  houseHoldType = ["Single", "Family", "Roommate"];

  houseOwnership = ["Own", "Rent"];

  yesNoOptions = ["Yes", "No"];

  yesNoNaOptions = ["Yes", "No", "N/A"];

  petTypeOptions = ["Dog", "Cat", "Other"];

  agreeOptions = ["Agree", "Disagree"];

  applicationForm: FormGroup = this.fb.group({
    // Personal Info
    applicantFirstName: ["", [Validators.required]],
    applicantLastName: ["", [Validators.required]],
    age: ["", [Validators.required]],
    phoneNo: ["", [Validators.required]],
    email: ["", [Validators.required]],
    // socialMediaAccount: ["", Validators.required],
    address: ["", [Validators.required]],
    city: ["", [Validators.required]],
    postalCode: ["", [Validators.required]],

    // Occupation Status
    employmentStatus: ["", Validators.required],
    occupation: ["", Validators.required],

    // Apartment Info
    householdType: ["", [Validators.required]],
    householdInfo: this.fb.array([]),
    houseOwnership: ["", [Validators.required]],
    haveChildren: ["", Validators.required],
    landlordSupportFoster: ["", [Validators.required]],
    allowHomeVisit: ["", Validators.required],

    // // Children Info
    childrenInfo: this.fb.array([]),

    // Previous Petting Info
    ownedPetBefore: ["", Validators.required],
    surrenderedPet: ["", Validators.required],
    primaryCaregiver: ["", Validators.required],
    ownedPetInfo: this.fb.array([]),

    // Petting Info
    stayingPlace: ["", Validators.required],
    prohibitedPlace: ["", Validators.required],
    medicalEmergencySituation: ["", Validators.required],
    purchaseIsProblem: ["", Validators.required],
    isolatedFromOwnPet: ["", Validators.required],
    interestPet: [[], Validators.required],

    // Signature
    agree: ["", Validators.required],
  });

  ngOnInit(): void {
    this.applicationForm.controls["employmentStatus"].valueChanges.subscribe(
      (v) => {
        if (v === "Yes") {
          this.applicationForm.controls["occupation"].setValidators(
            Validators.required
          );
        } else {
          this.applicationForm.controls["occupation"].setValue("");
          this.applicationForm.controls["occupation"].clearValidators();
        }
      }
    );

    this.applicationForm.controls["householdType"]?.valueChanges.subscribe(
      (v) => {
        if (v === "Single") {
          this.householdInfoArray.controls.length = 0;
          this.applicationForm.controls["householdInfo"].patchValue([]);
        } else {
          if (this.householdInfoArray.length === 0) {
            this.addHouseholdInfo();
          }
        }
      }
    );

    this.applicationForm.controls["houseOwnership"].valueChanges.subscribe(
      (v) => {
        if (v === "Rent") {
          this.applicationForm.controls["landlordSupportFoster"].setValidators(
            Validators.required
          );
        } else {
          this.applicationForm.controls["landlordSupportFoster"].setValue("");
          this.applicationForm.controls[
            "landlordSupportFoster"
          ].clearValidators();
        }
      }
    );

    this.applicationForm.controls["haveChildren"]?.valueChanges.subscribe(
      (v) => {
        if (v === "No") {
          this.childrenInfoArray.controls.length = 0;
          this.applicationForm.controls["childrenInfo"].patchValue([]);
        } else {
          if (this.childrenInfoArray.length === 0) {
            this.addChildrenInfo();
          }
        }
      }
    );

    this.applicationForm.controls["ownedPetBefore"]?.valueChanges.subscribe(
      (v) => {
        if (v === "No") {
          this.applicationForm.controls["primaryCaregiver"].setValue("");
          this.applicationForm.controls["primaryCaregiver"].clearValidators();

          this.applicationForm.controls["ownedPetInfo"].patchValue([]);

          this.ownedPetInfoArray.controls.length = 0;
        } else {
          if (this.ownedPetInfoArray.length === 0) {
            this.addOwnedPetInfo();
            this.applicationForm.controls["primaryCaregiver"].addValidators(
              Validators.required
            );
          }
        }
      }
    );
  }

  // Household info
  addHouseholdInfo(): void {
    this.householdInfoArray.push(
      this.fb.group({
        name: ["", Validators.required],
        age: ["", Validators.required],
        occupation: ["", Validators.required],
        hoursStayAtHome: ["", Validators.required],
        supportFosterProgram: ["", Validators.required],
      })
    );
  }

  deleteHouseholdInfo(index: number) {
    this.householdInfoArray.removeAt(index);
  }

  // Children Info
  addChildrenInfo(): void {
    this.childrenInfoArray.push(
      this.fb.group({
        age: ["", Validators.required],
      })
    );
  }

  deleteChildrenInfo(index: number) {
    this.childrenInfoArray.removeAt(index);
  }

  // Owned Pet Info
  addOwnedPetInfo(): void {
    this.ownedPetInfoArray.push(
      this.fb.group({
        type: ["", Validators.required],
        age: ["", Validators.required],
        duration: ["", Validators.required],
      })
    );
  }

  deleteOwnedPetInfo(index: number): void {
    this.ownedPetInfoArray.removeAt(index);
  }

  submitForm(): void {
    if (this.householdInfoArray.length === 0) {
      FormUpdate.clearValidators(this.householdInfoArray);
    }

    if (this.childrenInfoArray.length === 0) {
      FormUpdate.clearValidators(this.childrenInfoArray);
    }

    if (this.ownedPetInfoArray.length === 0) {
      FormUpdate.clearValidators(this.ownedPetInfoArray);
    }

    FormUpdate.updateTreeValidity(this.applicationForm);

    console.log("value", this.applicationForm);
    if (this.applicationForm.valid) {
      // TODO
      console.log("submit", this.applicationForm.value);
    } else {
      FormUpdate.updateTreeValidity(this.applicationForm);
    }
  }

  get householdInfoArray(): FormArray {
    return this.applicationForm.get("householdInfo") as FormArray;
  }

  get childrenInfoArray(): FormArray {
    return this.applicationForm.get("childrenInfo") as FormArray;
  }

  get ownedPetInfoArray(): FormArray {
    return this.applicationForm.get("ownedPetInfo") as FormArray;
  }
}
