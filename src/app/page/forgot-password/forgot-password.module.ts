import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ForgotPasswordPage } from './forgot-password';

@NgModule({
  declarations: [ForgotPasswordPage],
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
})
export class ForgotPasswordModule {}
