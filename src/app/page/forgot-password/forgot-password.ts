import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl:'./forgot-password.html',
  styleUrl: './forgot-password.scss',
  standalone: false,
})
export class ForgotPassword {
  email: string = '';
  constructor(private router: Router) { }

 onSubmit() {
    if (this.email) {
      console.log('Reset link sent to:', this.email);
      this.router.navigate(['/login/otpage']);
    } else {
      alert('Please enter your email address.');
    }
  }


}
