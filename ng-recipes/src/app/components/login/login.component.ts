import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  repeatPassword:string;
  error: string;

  constructor(
      private router:Router
  ) { }

  ngOnInit() { }

  goToSignup() {
    this.router.navigate(['./sign-up'])
  }

  

  login() {
    if (!this.email || !this.email.includes('@') || !this.email.includes('.')) {
      this.error = "Email invalid"
    } else if (!this.password) {
      this.error = "password issue"
    } else if (this.password!== this.repeatPassword){
      this.error = "password does not match"
    }
    else {
      this.error = null;
      alert('you are logged in')
    }
  }
}
