import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components-module';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { AppRoutingModule } from './app-routing-module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Page Modules */
import { LoginModule } from './page/login/login.module';
import { SignupModule } from './page/signup/signup.module';
import { ForgotPasswordModule } from './page/forgot-password/forgot-password.module';
import { VerifyOTPModule } from './page/verifyotppage/verifyotppagemodule';
import { DashboardModule } from './page/Dashboard/dashboard.module';
import { ViewModule } from './page/View/View.module';
import { ReportsModule } from './page/reports/reports.module';
import { TeamsModule } from './page/teams/teams.module';
import { MessagesModule } from './page/messages/messages.module';
import { CalendarModule } from './page/Calendar/Calendar.module';
import { ProjectsModule } from './page/projects/projects.module';
import { ServicesModule } from './page/services/services.module';
import { EmailModule } from './page/email/email.module';
import { AutomationModule } from './page/automation/automation.module';
import { IntegrationModule } from './page/integration/integration.module';
import { SettingsModule } from './page/settings/settings.module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule.forRoot([]),
    NgbModule,
    LoginModule,
    SignupModule,
    ForgotPasswordModule,
    VerifyOTPModule,
    DashboardModule,
    ViewModule,
    ReportsModule,
    TeamsModule,
    MessagesModule,
    CalendarModule,
    ProjectsModule,
    ServicesModule,
    EmailModule,
    AutomationModule,
    IntegrationModule,
    SettingsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.app-dark'
        }
      }
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
