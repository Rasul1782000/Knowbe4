import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { ForgotPassword } from './forgot-password';

const routes: Routes = [
  { path: '', component: ForgotPassword }
];

@NgModule({
  declarations: [
    ForgotPassword
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    InputTextModule,
    ButtonModule,
    StyleClassModule
  ],

})
export class ForgotPasswordModule { }
