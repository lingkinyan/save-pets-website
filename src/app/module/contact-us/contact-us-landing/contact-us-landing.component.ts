import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { PostFormService } from "../../../common-components/services/post-form.service";

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
    private title: Title,
    private postFormService: PostFormService
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
    email: ["", [Validators.email, Validators.required]],
    message: ["", [Validators.required]],
  });

  isFormSubmitted = false;

  submitForm(): void {
    if (this.validateForm.valid) {
      const formValue = {
        firstName: this.validateForm.value.firstName,
        lastName: this.validateForm.value.lastName,
        email: this.validateForm.value.email,
        message: this.validateForm.value.message,
      };

      this.postFormService.postContactUs(formValue).subscribe(
        (success) => {
          // console.log("submit", this.validateForm.value);
          this.validateForm.reset();
          this.isFormSubmitted = true;
        },
        (err) => {
          console.log(err.message);
        }
      );
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
