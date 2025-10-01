import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { ForgotPasswordComponent } from './Forgot-passwordComponent';

const routes: Routes = [
  { path: '', component:ForgotPasswordComponent} 
];

@NgModule({
  declarations: [
   ForgotPasswordComponent
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
export class LoginModule { }