import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent {
  isLogin = true;

  constructor(private authService: AuthService) {}
  onSwitchMode() {
    console.log(this.isLogin);
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLogin) {
    } else {
      this.authService
        .signup(email, password)
        .subscribe(
          resData => {
            console.log(resData)
          },
          error => {
            console.log(error)
          }
        );
    }

    form.reset();
  }
}
