import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)]
import { RouterModule, Routes } from '@angular/router';

// PrimeNG Modules used in the template
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
// You might also need the PrimeNG CSS directive (for styled mode)
import { StyleClassModule } from 'primeng/styleclass'; 
import { LoginComponent } from './LoginComponent';
// Define the routes for this feature module
const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes), // Use forChild in feature modules
    
    // PrimeNG Imports
    InputTextModule, 
    ButtonModule,
    StyleClassModule
  ],
  // No need to export if it's a routable component
})
export class LoginModule { }