import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact-us-landing",
  standalone: false,
  templateUrl: "./contact-us-landing.component.html",
  styleUrl: "./contact-us-landing.component.less",
})
export class ContactUsLandingComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle("Contact Us | Pet Save");
  }
  validateForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string>;
    message: FormControl<string>;
  }> = this.fb.group({
    firstName: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    email: ["", [Validators.required]],
    message: ["", [Validators.required]],
  });

  isFormSubmitted = false;

  submitForm(): void {
    if (this.validateForm.valid) {
      // TODO
      console.log("submit", this.validateForm.value);
      this.validateForm.reset();
      this.isFormSubmitted = true;
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  routeToHomePage(): void {
    this.router.navigate(["/home"]);
  }
}
