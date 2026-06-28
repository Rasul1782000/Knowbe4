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
  rest: any;
  PasswordForm: FormGroup | any;
  error: any;
  otpValues: string[] = ['', '', '', ''];

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

  onOtpInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.value && index < 3) {
      const next = input.closest('.otp-inputs')?.querySelectorAll('.otp-box')[index + 1] as HTMLInputElement;
      next?.focus();
    }
    this.updateOtpValue();
  }

  onOtpKeydown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && !input.value && index > 0) {
      const prev = input.closest('.otp-inputs')?.querySelectorAll('.otp-box')[index - 1] as HTMLInputElement;
      prev?.focus();
    }
    this.updateOtpValue();
  }

  private updateOtpValue(): void {
    const inputs = document.querySelectorAll('.otp-box');
    this.otpValues = Array.from(inputs).map(el => (el as HTMLInputElement).value);
    this.otpForm.patchValue({ otp: this.otpValues.join('') });
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
      error: error => this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message })
    });
  }
}
