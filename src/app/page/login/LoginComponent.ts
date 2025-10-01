import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './LoginComponent.html',
  styleUrls: ['./LoginComponent.scss'],
  standalone:false,
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Implement login logic (e.g., API call)
    console.log('Login attempt:', { email: this.email, password: this.password });
    this.router.navigate(['/home']);
  }
}