import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './Login.html',
  styleUrls: ['./Login.scss'],
  standalone:false,
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {

    console.log('Login attempt:', { email: this.email, password: this.password });
    this.router.navigate(['/home']);
  }
}
