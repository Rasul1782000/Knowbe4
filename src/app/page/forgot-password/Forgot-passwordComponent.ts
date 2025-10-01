import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './Forgot-passwordComponent.html',
  styleUrl: './Forgot-passwordcomponent.scss',
  standalone: false,
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private router: Router) { }

  onSubmit(): void {
    console.log('Sending password reset link to:', this.email);
    alert(`If an account exists for ${this.email}, a reset link has been sent.`);
    
    this.router.navigate(['/login']);
  }
}
