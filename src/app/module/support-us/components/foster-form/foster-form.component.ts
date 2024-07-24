import { Component } from "@angular/core";
import {
  FormArray,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { FormUpdate } from "../../../../common-components/function/form-update.component";
import { Router } from "@angular/router";
import { Options } from "../../../../common-components/class/options.component";

@Component({
  selector: "app-foster-form",
  standalone: false,
  templateUrl: "./foster-form.component.html",
  styleUrl: "./foster-form.component.less",
})
export class FosterFormComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private title: Title,
    private router: Router
  ) {
    this.title.setTitle("Foster Application Form | Pet Save");
  }
  // Options
  availablePetsList = ["Dog", "Cat"];

  houseHoldType = ["Single", "Family", "Roommate"];

  houseOwnership = ["Own", "Rent"];

  yesNoOptions: Options[] = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  yesNoNaOptions: Options[] = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
    { value: null, label: "N/A" },
  ];

  applicationForm: FormGroup = this.fb.group({
    // General Info
    fosterPet: [[], [Validators.required]],

    // Personal Info
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    age: ["", [Validators.required]],
    phoneNumber: ["", [Validators.required]],
    email: ["", [Validators.required]],
    socialMediaAccount: [""],
    address: ["", [Validators.required]],
    city: ["", [Validators.required]],
    postalCode: ["", [Validators.required]],

    // HouseHold Info
    householdType: ["", [Validators.required]],
    houseOwnership: ["", [Validators.required]],
    haveChildren: ["", Validators.required],
    allowPets: ["", [Validators.required]],
    haveFencedYard: ["", [Validators.required]],
    haveAllergy: ["", [Validators.required]],
    householdInfo: this.fb.array([]),

    // Children Info
    childrenInfo: this.fb.array([]),

    // Petting Info
    hourAlone: ["", Validators.required],
    stayingPlace: ["", Validators.required],
    prohibitedPlace: ["", Validators.required],
    experience: ["", Validators.required],
    outOfTownPlan: ["", Validators.required],
    haveWhatsapp: ["", Validators.required],
    havePetBefore: ["", Validators.required],
    haveSurrenderedPetBefore: ["", Validators.required],
    havePetNow: ["", Validators.required],
    petsInfo: this.fb.array([]),

    // References
    referencesInfo: this.fb.array([]),
  });

  ngOnInit(): void {
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

    this.applicationForm.controls["haveChildren"]?.valueChanges.subscribe(
      (v) => {
        if (!v) {
          this.childrenInfoArray.controls.length = 0;
          this.applicationForm.controls["childrenInfo"].patchValue([]);
        } else {
          if (this.childrenInfoArray.length === 0) {
            this.addChildrenInfo();
          }
        }
      }
    );

    this.applicationForm.controls["havePetNow"].valueChanges.subscribe((v) => {
      if (!v) {
        this.petsInfoArray.controls.length = 0;
        this.applicationForm.controls["petsInfo"].patchValue([]);
      } else {
        if (this.petsInfoArray.length === 0) {
          this.addPetInfo();
        }
      }
    });

    this.applicationForm.controls["houseOwnership"].valueChanges.subscribe(
      (v) => {
        if (v === "Rent") {
          this.applicationForm.controls["allowPets"].addValidators(
            Validators.required
          );
        } else {
          this.applicationForm.controls["allowPets"].clearValidators();
          this.applicationForm.controls["allowPets"].setValue("");
        }
      }
    );

    if (this.referencesInfoArray.controls.length === 0) {
      this.addReferences();
      this.addReferences();
    }
  }

  // Household info
  addHouseholdInfo(): void {
    this.householdInfoArray.push(
      this.fb.group({
        name: ["", Validators.required],
        age: ["", Validators.required],
        occupation: ["", Validators.required],
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
  addPetInfo(): void {
    this.petsInfoArray.push(
      this.fb.group({
        age: ["", Validators.required],
      })
    );
  }

  deletePetInfo(index: number) {
    this.petsInfoArray.removeAt(index);
  }

  // References Info
  addReferences(): void {
    this.referencesInfoArray.push(
      this.fb.group({
        name: ["", Validators.required],
        phoneNumber: ["", Validators.required],
      })
    );
  }

  submitForm(): void {
    if (this.householdInfoArray.length === 0) {
      FormUpdate.clearValidators(this.householdInfoArray);
    }

    if (this.childrenInfoArray.length === 0) {
      FormUpdate.clearValidators(this.childrenInfoArray);
    }

    if (this.petsInfoArray.length === 0) {
      FormUpdate.clearValidators(this.petsInfoArray);
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

  get petsInfoArray(): FormArray {
    return this.applicationForm.get("petsInfo") as FormArray;
  }

  get referencesInfoArray(): FormArray {
    return this.applicationForm.get("referencesInfo") as FormArray;
  }

  routeToSupportUsPage(): void {
    this.router.navigate(["/support-us"]);
  }
}
