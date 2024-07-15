import { Component } from "@angular/core";
import { FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { FormUpdate } from "../../../../common-components/function/form-update.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-volunteer-form",
  standalone: false,
  templateUrl: "./volunteer-form.component.html",
  styleUrl: "./volunteer-form.component.less",
})
export class VolunteerFormComponent {
  constructor(private fb: NonNullableFormBuilder, private title: Title, private router: Router) {
    this.title.setTitle("Volunteer Application Form | Pet Save");
  }

  availability = [
    { morning: false, afternoon: false, evening: false },
    { morning: false, afternoon: false, evening: false },
    { morning: false, afternoon: false, evening: false },
    { morning: false, afternoon: false, evening: false },
    { morning: false, afternoon: false, evening: false },
    { morning: false, afternoon: false, evening: false },
    { morning: false, afternoon: false, evening: false },
  ];

  applicationForm: FormGroup = this.fb.group({
    // Personal Info
    applicantFirstName: ["", [Validators.required]],
    applicantLastName: ["", [Validators.required]],
    age: ["", [Validators.required]],
    phoneNo: ["", [Validators.required]],
    email: ["", [Validators.required]],
    address: ["", [Validators.required]],
    city: ["", [Validators.required]],
    postalCode: ["", [Validators.required]],
    occupation: ["", Validators.required],
    emergencyContactName: ["", Validators.required],
    emergencyContactPhoneNo: ["", Validators.required],

    distanceToTravel: ["", Validators.required],

    availableTimeSlot: [""],
  });

  dayList: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  isSubmitFormClick: boolean = false;

  checkboxChangeEvent(event: any, time: string, day: number): void {
    this.availability[day][time] = event;
  }

  getCurrentCheckboxValue(time: string, day: number): boolean {
    return this.availability[day][time];
  }

  submitForm(): void {
    this.isSubmitFormClick = true;

    FormUpdate.updateTreeValidity(this.applicationForm);

    this.applicationForm.controls["availableTimeSlot"].setValue(
      this.availability
    );

    if (this.applicationForm.valid && !this.showTableErrorMsg()) {
      // TODO
      console.log("submit", this.applicationForm.value);
    } else {
      FormUpdate.updateTreeValidity(this.applicationForm);
    }
  }

  showTableErrorMsg(): boolean {
    let isMorningBlank = this.availability.every((v) => !v.morning);

    let isAfternoonBlank = this.availability.every((v) => !v.afternoon);

    let isEveningBlank = this.availability.every((v) => !v.evening);

    return (
      isMorningBlank &&
      isAfternoonBlank &&
      isEveningBlank &&
      this.isSubmitFormClick
    );
  }

  routeToSupportUsPage(): void {
    this.router.navigate(['/support-us'])
  }
}
