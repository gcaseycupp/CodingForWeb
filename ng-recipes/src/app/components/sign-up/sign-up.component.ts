import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string;
  password: string;
  repeatPassword:string;
  error: string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['./Login'])
  }

  

  signUp() {
    if (!this.email || !this.email.includes('@') || !this.email.includes('.')) {
      this.error = "Email invalid"
    } else if (!this.password) {
      this.error = "password issue"
    }
    else {
      this.error = null;
      alert('signed up')
    }

  }

}
