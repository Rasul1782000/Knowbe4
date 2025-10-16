import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent as LoginComponent } from './page/login/Login';
import { Login } from './page/login/Login';
import { ForgotPassword } from './page/forgot-password/forgot-password';
// import { Signup as SignupComponent } from './page/signup/signup';
import { Signup } from './page/signup/signup';
import { Dashboard } from './page/Dashboard/dashboard';
import { Calendar } from './page/Calendar/Calendar';
import { Messages } from './page/messages/messages';
import { Settings } from './page/settings/settings';
import { Reports } from './page/reports/reports';
import { Viewpage } from './page/View/View';
import { Teams } from './page/teams/teams';
import { Reportsview } from './page/reportsview/reportsview';
import { Reportssearch as ReportsSearch } from './page/reportssearch/reportssearch';
import { Projects } from './page/projects/projects';
import { Services } from './page/services/services';
import { VerifyOTpage } from './page/verifyotppage/verifyotppage';
import { Basicinfo } from './page/basicinfo/basicinfo';
import { Billing } from './page/billing/billing';
import { Mode } from './page/mode/mode';
import { Membership } from './page/membership/membership';

// import { Automation } from './page/Tools/automation/automation';
// import { Email } from './page/Tools/email/email';
// import { Helpcenter } from './page/Tools/helpcenter/helpcenter';
// import { Integration } from './page/Tools/integration/integration';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'signup', component: Signup },
  { path: 'login/otpage', component: VerifyOTpage },
  { path: 'home', component: Dashboard },
  { path: 'messages', component: Messages },
  { path: 'calendar', component: Calendar },
  { path: 'settings', component: Settings },
  { path: 'teams', component: Teams },
  { path: 'View', component: Viewpage },
  { path: 'reports', component: Reports },
  { path: 'reports/view', component: Reportsview },
  { path: 'reports/search', component: ReportsSearch },
  { path: 'application/projects', component: Projects },
  { path: 'application/services', component: Services },
  {path: 'settings',
    component: Settings,
    children: [
      { path: 'basicinfo', component: Basicinfo},
      { path: 'billing', component: Billing},
      { path: 'mode', component: Mode},
      { path: 'membership', component: Membership },
      { path: '', redirectTo: 'basicinfo', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
