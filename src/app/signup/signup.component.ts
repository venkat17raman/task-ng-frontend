import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault()
    const errors = []
    const target = event.target
    const name = target.querySelector('#name').value
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    const cpassword = target.querySelector('#cpassword').value

    if(password != cpassword) {
      errors.push("Passwords do not match");
    }

    // more validation

    if(errors.length === 0) {
      this.auth.registerUser(name,email, password).subscribe(data => {
        console.log(data)
        if(data.success) {
          this.router.navigate(['login'])
        }
      })
    }
    console.log(name,email, password)
  }

}
