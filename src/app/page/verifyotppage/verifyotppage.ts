import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-VerifyOTpage',
  templateUrl: './verifyotppage.html',
  styleUrls: ['./verifyotppage.scss'],
  standalone: false
})
export class VerifyOTpage implements OnInit {

  otp = '';
  email = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const savedEmail = localStorage.getItem('reset_email');
    if (savedEmail) {
      this.email = savedEmail;
    }
  }

  private getCsrfToken(): string | null {
    const tokenElement = document.querySelector('meta[name="csrf-token"]');
    return tokenElement ? tokenElement.getAttribute('content') : null;
  }

  VerifyOtp() {
    const headers = new HttpHeaders({
      'X-CSRF-TOKEN': this.getCsrfToken() || ''
    });

    this.http.post('http://127.0.0.1:8004/Verify-Otp', {
      email: this.email,
      otp: this.otp
    }, { headers }).subscribe({
      next: (res: any) => {
        alert('✅ OTP verified successfully!');
        this.router.navigate(['/reset-password']);
      },
      error: (err) => {
        alert('❌ Invalid or expired OTP!');
      }
    });
  }

  SendOtp() {
    const headers = new HttpHeaders({
      'X-CSRF-TOKEN': this.getCsrfToken() || ''
    });

    this.http.post('http://127.0.0.1:8004/Send-Otp', {
      email: this.email
    }, { headers }).subscribe({
      next: (res: any) => {
        alert('OTP sent to your email!');
        this.router.navigate(['/verify-otp']);
      },
      error: (err) => {
        alert('Error sending OTP. Please try again.');
      }
    });
  }

  ResendOtp() {
    const headers = new HttpHeaders({
      'X-CSRF-TOKEN': this.getCsrfToken() || ''
    });

    this.http.post('http://127.0.0.1:8004/Resend-Otp', {
      email: this.email
    }, { headers }).subscribe({
      next: () => alert('New OTP sent!'),
      error: () => alert('Error sending OTP')
    });
  }
}
