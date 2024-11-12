import { Component } from "@angular/core";
import { FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { GetDropdownService } from "../../../../common-components/services/get-dropdown.service";
import { forkJoin } from "rxjs";
import { Options } from "../../../../common-components/class/options.component";
import { NzUploadFile } from "ng-zorro-antd/upload";

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
    private dropdownService: GetDropdownService
  ) {
    this.title.setTitle("Add New Pet | Pet Save");
  }

  isFormSubmitted: boolean = false;

  isLoaded: boolean = false;

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

  ngOnInit(): void {
    forkJoin(
      this.dropdownService.getPetTypeCategory(),
      this.dropdownService.getGender()
    ).subscribe((results) => {
      this.categoryOptions = results[0];
      this.genderOptions = results[1];
      this.isLoaded = true;
    });
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  defaultFileList: NzUploadFile[] = [];

  fileList = [...this.defaultFileList];
}
