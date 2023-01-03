import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent {
  isLogin = true;
  isLoading = false;
  error: string = null

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
    this.isLoading = true
    if (this.isLogin) {
    } else {
      this.authService
        .signup(email, password)
        .subscribe(
          resData => {
            console.log(resData);
            this.isLoading = false
          },
          errorRes => {
            switch(errorRes.error.error.message) {
              case 'EMAIL_EXIST': this.error = "Email already taken"
            }
            this.isLoading = false
          }
        );
    }

    form.reset();
  }
}
