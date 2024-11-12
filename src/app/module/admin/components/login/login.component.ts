import { Component } from "@angular/core";
import { CommonComponentModule } from "../../../../common-components/common-component.components";
import { FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { UserService } from "../../../../common-components/services/users/user.service";
import { jwtDecode } from "jwt-decode";
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
    private userService: UserService,
    private router: Router
  ) {
    this.title.setTitle("Admin Login | Pet Save");
  }

  action = "Login";

  isPassword: string = "password";

  showErrorMsg: boolean = false;

  loginSuccess: boolean = false;

  passwordIcon: string = "eye";

  isLogin: boolean = false;

  loginForm: FormGroup = this.fb.group({
    email: ["petsaveorg@gmail.com", [Validators.email, Validators.required]],
    password: ["Petsave@2024", Validators.required],
  });

  redirectSecond: number = 5;

  loginEmail = "";

  ngOnInit(): void {
    this.isLogin = localStorage.getItem("token") ? true : false;

    if (this.isLogin) {
      let token = localStorage.getItem("token");
      const decoded = jwtDecode(token);

      if (decoded.email) {
        this.loginEmail = decoded.email;
      }
    }
  }

  login(): void {
    this.userService.login(this.loginForm.value).subscribe((response) => {
      if (response.status === 200) {
        this.showErrorMsg = false;
        this.loginSuccess = true;

        const token = response.body;

        localStorage.setItem("token", token);

        this.routerToHomePage();
      } else {
        this.showErrorMsg = true;
      }
    });
  }

  changeVisible(): void {
    if (this.isPassword === "password") {
      this.isPassword = "text";
    } else {
      this.isPassword = "password";
    }
  }

  logout(): void {
    localStorage.removeItem("token");
    this.action = "Logout";
    this.routerToHomePage();
  }

  routerToHomePage(): void {
    setTimeout(() => {
      this.router.navigate(["/home"]);
    }, 5000);

    setInterval(() => {
      this.redirectSecond -= 1;
    }, 1000);
  }
}
