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
import { ReportsPage } from './page/reports/reports';
import { ViewPage } from './page/View/View';
import { ProjectsPage } from './page/projects/projects';
import { ServicesPage } from './page/services/services';
import { TeamsPage } from './page/teams/teams';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VerifyOTPage } from './page/verifyotppage/verifyotppage';
import { EmailPage } from './page/email/email';
import { AutomationPage } from './page/automation/automation';
import { IntegrationPage } from './page/integration/integration';
import { DashboardPage } from './page/Dashboard/dashboard';

@NgModule({
  declarations: [App, ReportsPage, ViewPage, ProjectsPage, ServicesPage, TeamsPage, VerifyOTPage, EmailPage, AutomationPage, IntegrationPage,AutomationPage,DashboardPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule.forRoot([]),
    NgbModule,

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
