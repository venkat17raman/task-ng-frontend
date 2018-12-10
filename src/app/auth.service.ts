import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  success: boolean,
  message: string
}

interface registerResponse {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(email, password) {
    // post these details to API server return user info if correct
    return this.http.post<myData>('http://localhost:1234/login', {
      email,
      password
    })
  }

  registerUser(name,email, password) {
    return this.http.post<registerResponse>('http://localhost:1234/signup', {
      name,
      email,
      password
    })
  }
}
