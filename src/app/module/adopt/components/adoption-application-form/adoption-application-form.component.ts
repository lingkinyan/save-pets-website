import { Component } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AvailablePets } from "../../../../common-components/class/available-pets.components";
import { FormUpdate } from "../../../../common-components/function/form-update.component";

@Component({
  selector: "app-adoption-application-form",
  standalone: false,
  templateUrl: "./adoption-application-form.component.html",
  styleUrl: "./adoption-application-form.component.less",
})
export class AdoptionApplicationFormComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle("Adopt Application Form | Pet Save");
  }

  // Options
  availablePetsList = AvailablePets.availablePets;

  houseHoldType = ["Single", "Family", "Roommate"];

  houseOwnership = ["Own", "Rent"];

  yesNoOptions = ["Yes", "No"];

  yesNoNaOptions = ["Yes", "No", "N/A"];

  applicationForm: FormGroup = this.fb.group({
    // General Info
    adoptPet: [[], [Validators.required]],

    // Personal Info
    applicantFirstName: ["", [Validators.required]],
    applicantLastName: ["", [Validators.required]],
    age: ["", [Validators.required]],
    phoneNo: ["", [Validators.required]],
    email: ["", [Validators.required]],
    socialMediaAccount: ["", Validators.required],
    address: ["", [Validators.required]],
    city: ["", [Validators.required]],
    postalCode: ["", [Validators.required]],

    // HouseHold Info
    householdType: ["", [Validators.required]],
    houseOwnership: ["", [Validators.required]],
    haveChildren: ["", Validators.required],
    allowPets: ["", [Validators.required]],
    fencedYard: ["", [Validators.required]],
    allergy: ["", [Validators.required]],
    householdInfo: this.fb.array([]),

    // Children Info
    childrenInfo: this.fb.array([]),

    // Petting Info
    hourAlone: ["", Validators.required],
    stayingPlace: ["", Validators.required],
    prohibitedPlace: ["", Validators.required],
    experience: ["", Validators.required],
    outOfTownPlan: ["", Validators.required],
    ableToUseWhatsapp: ["", Validators.required],
    ownPetBefore: ["", Validators.required],
    surrenderedPet: ["", Validators.required],
    currentlyOwnPet: ["", Validators.required],
    currentPetInfo: this.fb.array([]),

    // References
    firstReferenceName: ["", Validators.required],
    firstReferencePhoneNo: ["", Validators.required],
    secondReferenceName: ["", Validators.required],
    secondReferencePhoneNo: ["", Validators.required],
  });

  ngOnInit(): void {
    this.applicationForm.controls["householdType"]?.valueChanges.subscribe(
      (v) => {
        if (v === "Single") {
          this.householdInfoArray.controls.length = 0;
        } else {
          if (this.householdInfoArray.length === 0) {
            this.addHouseholdInfo();
          }
        }
      }
    );

    this.applicationForm.controls["haveChildren"]?.valueChanges.subscribe(
      (v) => {
        if (v === "No") {
          this.childrenInfoArray.controls.length = 0;
        } else {
          if (this.childrenInfoArray.length === 0) {
            this.addChildrenInfo();
          }
        }
      }
    );

    this.applicationForm.controls["currentlyOwnPet"].valueChanges.subscribe(
      (v) => {
        if (v === "No") {
          this.currentPetInfoArray.controls.length = 0;
        } else {
          if (this.currentPetInfoArray.length === 0) {
            this.addCurrentPetInfo();
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

  // Current Pet Info
  addCurrentPetInfo(): void {
    this.currentPetInfoArray.push(
      this.fb.group({
        age: ["", Validators.required],
      })
    );
  }

  deleteCurrentPetInfo(index: number) {
    this.currentPetInfoArray.removeAt(index);
  }

  submitForm(): void {
    if (this.householdInfoArray.length === 0) {
      FormUpdate.clearValidators(this.householdInfoArray);
    }

    if (this.childrenInfoArray.length === 0) {
      FormUpdate.clearValidators(this.childrenInfoArray);
    }

    if (this.currentPetInfoArray.length === 0) {
      FormUpdate.clearValidators(this.currentPetInfoArray);
    }

    FormUpdate.updateTreeValidity(this.applicationForm);

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

  get currentPetInfoArray(): FormArray {
    return this.applicationForm.get("currentPetInfo") as FormArray;
  }
}
