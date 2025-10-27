import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './page/login/Login';
import { ForgotPasswordPage } from './page/forgot-password/forgot-password';
import { SignupPage } from './page/signup/signup';
import { DashboardPage } from './page/Dashboard/dashboard';
import { CalendarPage } from './page/Calendar/Calendar';
import { MessagesPage } from './page/messages/messages';
import { SettingsPage } from './page/settings/settings';
import { ReportsPage } from './page/reports/reports';
import { ViewPage } from './page/View/View';
import { TeamsPage } from './page/teams/teams';
import { ProjectsPage} from './page/projects/projects';
import { ServicesPage } from './page/services/services';
import { VerifyOTPage } from './page/verifyotppage/verifyotppage';
import { BasicinfoPage } from './page/basicinfo/basicinfo';
import { BillingPage } from './page/billing/billing';
import { ModePage } from './page/mode/mode';
import { MembershipPage } from './page/membership/membership';
import { EmailPage } from './page/email/email';
import { AutomationPage } from './page/automation/automation';
import { IntegrationPage } from './page/integration/integration';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'forgot-password', component: ForgotPasswordPage },
  { path: 'signup', component: SignupPage },
  { path: 'login/otpage', component: VerifyOTPage },
  { path: 'home', component: DashboardPage },
  { path: 'messages', component: MessagesPage},
  { path: 'calendar', component: CalendarPage},
  { path: 'settings', component: SettingsPage},
  { path: 'teams', component: TeamsPage },
  { path: 'View', component: ViewPage },
  { path: 'reports', component: ReportsPage },
  { path: 'application/projects', component: ProjectsPage },
  { path: 'application/services', component: ServicesPage },
  { path: 'tools/email', component:EmailPage},
  {path: 'tools/automation', component:AutomationPage},
  {path: 'tools/integration',component:IntegrationPage},

  {path: 'settings',
    component: SettingsPage,
    children: [
      { path: 'basicinfo', component: BasicinfoPage},
      { path: 'billing', component: BillingPage},
      { path: 'mode', component: ModePage},
      { path: 'membership', component: MembershipPage },
      { path: '', redirectTo: 'basicinfo', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
