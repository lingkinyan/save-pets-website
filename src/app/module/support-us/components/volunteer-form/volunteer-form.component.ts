import { Component } from "@angular/core";
import { FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { FormUpdate } from "../../../../common-components/function/form-update.component";
import { Router } from "@angular/router";
import { GetDropdownService } from "../../../../common-components/services/get-dropdown.service";
import { forkJoin } from "rxjs";
import { PostFormService } from "../../../../common-components/services/post-form.service";

@Component({
  selector: "app-volunteer-form",
  standalone: false,
  templateUrl: "./volunteer-form.component.html",
  styleUrl: "./volunteer-form.component.less",
})
export class VolunteerFormComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private title: Title,
    private router: Router,
    private getDropdownService: GetDropdownService,
    private postFormService: PostFormService
  ) {
    this.title.setTitle("Volunteer Application Form | Pet Save");
  }

  timetable:any = {};

  isFormSubmitted: boolean = false;

  applicationForm: FormGroup = this.fb.group({
    // Personal Info
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    age: ["", [Validators.required]],
    phoneNumber: ["", [Validators.required]],
    email: ["", [Validators.email, Validators.required]],
    address: ["", [Validators.required]],
    city: ["", [Validators.required]],
    postalCode: ["", [Validators.required]],
    occupation: ["", Validators.required],
    emergencyContactName: ["", Validators.required],
    emergencyContactPhoneNumber: ["", Validators.required],

    distanceWillingToTravel: ["", Validators.required],

    timetable: [""],
  });

  timeOfDayList: string[] = [];

  dayList: string[] = [];

  isSubmitFormClick: boolean = false;

  isLoaded: boolean = false;

  ngOnInit(): void {
    forkJoin(
      this.getDropdownService.getDayOfWeek(),
      this.getDropdownService.getTimeOfDay()
    ).subscribe((results) => {
      this.dayList = results[0].map((v) => this.capitalizeFirstLetter(v.value));
      this.timeOfDayList = results[1]
        .map((v) => this.capitalizeFirstLetter(v.value))
        .filter((v) => v !== "Whole_day");

      results[0].forEach((day) => {
        this.timetable[day.value] = [];
      });

      this.isLoaded = true;
    });
  }

  checkboxChangeEvent(event: any, time: string, day: number): void {
    const dayString = this.dayList[day].toLowerCase();

    if (event) {
      this.timetable[dayString].push(time);
    } else {
      this.timetable[dayString] = this.timetable[dayString].filter(
        (v) => v !== time
      );
    }
  }

  getCurrentCheckboxValue(time: string, day: number): boolean {
    const dayString = this.dayList[day].toLowerCase();

    return this.timetable[dayString].filter((v) => v === time).length > 0;
  }

  submitForm(): void {
    this.isSubmitFormClick = true;

    FormUpdate.updateTreeValidity(this.applicationForm);

    if (this.applicationForm.valid && !this.showTableErrorMsg()) {
      this.applicationForm.controls["timetable"].setValue(this.timetable);

      this.postFormService
        .postVolunteerForm(this.applicationForm.value)
        .subscribe(
          (ok) => {
            this.applicationForm.reset();

            this.isFormSubmitted = true;
          },
          (err) => {
            FormUpdate.updateTreeValidity(this.applicationForm);
          }
        );
    } else {
      FormUpdate.updateTreeValidity(this.applicationForm);
    }
  }

  showTableErrorMsg(): boolean {
    let selected = false;

    this.dayList.forEach((v) => {
      if (this.timetable[v.toLowerCase()]?.length > 0) {
        selected = true;
      }
    });

    return !selected && this.isSubmitFormClick;
  }

  routeToSupportUsPage(): void {
    this.router.navigate(["/support-us"]);
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
