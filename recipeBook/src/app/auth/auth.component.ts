import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLogin = true;

  onSwitchMode(){
    console.log(this.isLogin)
    this.isLogin = !this.isLogin
  }

  onSubmit(form:NgForm){
    console.log(form.value)
    form.reset()
  }
}
