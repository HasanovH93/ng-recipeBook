import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent {
  isLogin = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}
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

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    if (this.isLogin) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(
      (resData) => {
       this.router.navigate(['/recipes'])
        this.isLoading = false;
      },
      (errorMsg) => {
        this.error = errorMsg;
        this.isLoading = false;
      }
    );
    form.reset();
  }
}
