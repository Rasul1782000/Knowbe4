import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { ForgotPasswordPage } from './forgot-password';

const routes: Routes = [
  { path: '', component: ForgotPasswordPage }
];

@NgModule({
  declarations: [
    ForgotPasswordPage
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
