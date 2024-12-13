import { Component } from "@angular/core";
import { FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { GetDropdownService } from "../../../../common-components/services/get-dropdown.service";
import { forkJoin } from "rxjs";
import { Options } from "../../../../common-components/class/options.component";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { PostFormService } from "../../../../common-components/services/post-form.service";
import { BreedList } from "../../../../common-components/class/breed-list.components";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-add-pet",
  standalone: false,
  templateUrl: "./add-pet.component.html",
  styleUrl: "./add-pet.component.less",
})
export class AddPetComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private title: Title,
    private dropdownService: GetDropdownService,
    private postFormService: PostFormService,
    private http: HttpClient
  ) {
    this.title.setTitle("Add New Pet | Pet Save");
  }

  isFormSubmitted: boolean = false;

  isLoaded: boolean = false;

  showPopUpModal: boolean = false;

  isUnauthorized: boolean = false;

  isAdded: boolean = false;

  categoryOptions = [];

  genderOptions = [];

  yesNoOptions: Options[] = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  newPetForm: FormGroup = this.fb.group({
    name: ["", Validators.required],
    categoryId: ["", Validators.required],
    genderId: ["", Validators.required],
    breed: ["", Validators.required],
    dateOfBirth: ["", Validators.required],
    weight: ["", Validators.required],
    color: ["", Validators.required],
    healthStatus: [
      "Vaccinations up to date, spayed / neutered.",
      Validators.required,
    ],
    houseTrained: ["", Validators.required],
    idealFamily: ["Other dogs, cats, children.", Validators.required],
    characteristics: ["", Validators.required],
    description: ["", Validators.required],
  });

  uploadLink = "";

  breedList = [];

  ngOnInit(): void {
    forkJoin(
      this.dropdownService.getPetTypeCategory(),
      this.dropdownService.getGender()
    ).subscribe((results) => {
      this.categoryOptions = results[0];
      this.genderOptions = results[1];
      this.isLoaded = true;
    });

    this.newPetForm.controls["categoryId"]?.valueChanges.subscribe((v) => {
      this.newPetForm.controls["breed"]?.setValue("");

      if (v === 1) {
        this.breedList = BreedList.DogBreedList;
      } else {
        this.breedList = BreedList.CatBreedList;
      }
    });
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  addPet(): void {
    if (this.newPetForm.valid) {
      let date = new Date(this.newPetForm.value.dateOfBirth);
      let formValue = {
        email: localStorage.getItem("email"),
        name: this.newPetForm.value.name,
        categoryId: this.newPetForm.value.categoryId,
        genderId: this.newPetForm.value.genderId,
        breed: this.newPetForm.value.breed,
        dateOfBirth: date.toISOString().split("T")[0],
        weight: this.newPetForm.value.weight,
        color: this.newPetForm.value.color,
        healthStatus: this.newPetForm.value.healthStatus,
        houseTrained: this.newPetForm.value.houseTrained,
        idealFamily: this.newPetForm.value.idealFamily,
        characteristics: this.newPetForm.value.characteristics,
        description: this.newPetForm.value.description,
      };
      this.http
        .post("https://api.petsaveorg.com/api/v1/pets", formValue)
        .subscribe(
          (response: any) => {
            this.showPopUpModal = true;
            this.isAdded = true;

            setTimeout(() => {
              this.routeTo("viewPet", response.id);
            }, 5000);
          },
          (error) => {
            if (error.error.message === "Unauthorized") {
              this.showPopUpModal = true;
              this.isUnauthorized = true;
              localStorage.removeItem("token");
              localStorage.removeItem("email");
            }
          }
        );
    } else {
      Object.values(this.newPetForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  routeTo(path: string, petId?: number): void {
    if (path === "login") {
      this.router.navigate([`/admin/login`]);
    } else if (path === "viewPet") {
      this.router.navigate([`/adopt/pet-info/` + petId]);
    }
  }

  defaultFileList: NzUploadFile[] = [];

  fileList = [...this.defaultFileList];
}
