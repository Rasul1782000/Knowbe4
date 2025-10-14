import { OtpService } from './../../service/services/otpservice';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-otpage',
  templateUrl: './otppage.html',
  styleUrls: ['./otppage.scss'],
  providers: [MessageService],
  standalone: false,
})
export class OtppageComponent {

  otpForm: FormGroup;
  formSubmitted = false;
  rest:any;
  PasswordForm: FormGroup | any;
  error:any;


  constructor(
    private fb: FormBuilder,
    private OtpService: OtpService,
    private messageService: MessageService
  ) {
    this.otpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  SendOtp() {
    this.formSubmitted = true;
    if (this.otpForm.valid) {
      const email = this.otpForm.get('email')?.value;
      this.OtpService.SendOtp(email).subscribe({
        next: rest => this.messageService.add({ severity: 'success', summary: 'OTP Sent', detail: rest.message }),
        error: error => this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message })
      });
    }
  }

  VerifyOtp() {
    this.formSubmitted = true;
    const email = this.otpForm.get('email')?.value;
    const Otp = this.otpForm.get('otp')?.value;
    this.OtpService.VerifyOtp(email, Otp).subscribe({
      next: rest => this.messageService.add({ severity: 'success', summary: 'OTP Verified', detail: rest.message }),
      error: error=> this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message })
    });
  }

}
