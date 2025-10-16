import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components-module';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { AppRoutingModule } from './app-routing-module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Reports } from './page/reports/reports';
import { Viewpage } from './page/View/View';
import { Reportsview } from './page/reportsview/reportsview';
import { Reportssearch } from './page/reportssearch/reportssearch';
import { Projects } from './page/projects/projects';
import { Services } from './page/services/services';
import { Teams } from './page/teams/teams';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { VerifyOTpage } from './page/verifyotppage/verifyotppage';



@NgModule({
  declarations: [App, Reports, Viewpage, Reportsview, Reportssearch, Projects, Services, Teams, VerifyOTpage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule.forRoot([]),
    NgbModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
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
