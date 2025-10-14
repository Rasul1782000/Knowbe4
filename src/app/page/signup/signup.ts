import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss'],
  standalone:false, // corrected
})
export class Signup {

  email = '';
  password = '';
  confirmPassword = '';
  username = '';

  constructor(private router: Router) {}

  Submitresponse() {
    // Password match check
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Check all fields
    if (!this.email || !this.password || !this.username) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate registration (replace this with real backend call)
    console.log('Registering user:', { email: this.email, password: this.password, username: this.username });

    alert('Registration successful! Please verify your email.');
    this.router.navigate(['/login']);
  }

}
