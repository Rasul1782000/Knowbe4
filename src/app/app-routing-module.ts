import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent as LoginComponent } from './page/login/LoginComponent';
import { ForgotPasswordComponent } from './page/forgot-password/Forgot-passwordComponent';
import { Signup as SignupComponent } from './page/signup/signup';
import { Home } from './page/home/Home';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: Home },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}