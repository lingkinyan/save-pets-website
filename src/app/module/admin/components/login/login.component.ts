import { Component } from "@angular/core";
import { CommonComponentModule } from "../../../../common-components/common-component.components";
import { FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { UserService } from "../../../../common-components/services/users/user.service";

@Component({
  selector: "app-login",
  standalone: false,
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.less",
})
export class LoginComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private title: Title,
    private router: Router,
    private userService: UserService
  ) {
    this.title.setTitle("Admin Login | Pet Save");
  }

  isPassword: string = "password";

  loginForm: FormGroup = this.fb.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", Validators.required],
  });

  login(): void {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(
        (ok) => {},
        (error) => {
          console.log("no user");
        }
      );
    }
  }
}
