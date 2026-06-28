import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LoginPage } from './Login';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
})
export class LoginModule {}
