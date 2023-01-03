import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    kind:string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email, password) {
  return  this.http.post<AuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCzC6LmjulB8voPgas1ITNJByaOwnOoaMo",
      { email: email, password: password, returnSecureToken: true }
    );
  }
}
