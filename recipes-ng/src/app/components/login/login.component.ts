import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  email: string;
  password: string;
  working: boolean;

  constructor(
    private router: Router,
    private account: AccountService
  ) { }

  ngOnInit() { }

  async login() {
    console.log('111 login component ')

    if (!this.email || !this.email.includes('@') || !this.email.includes('.')) {
      this.error = 'Email invalid.';
    }
    else if (!this.password) {
      this.error = 'Password invalid.';
    }
    else {
      this.working=true;
      this.error = null;
      this.error = await this.account.login(this.email, this.password);
      if(!this.error){
        this.router.navigate(['/search']);
      }
      this.working= false;
    }  
    
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
