import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlipSwitchComponent } from './flip-switch/flip-switch';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarComponent } from './calendar/calendar';
import { MatNativeDateModule } from '@angular/material/core';
import { NavbarComponent } from './navbar/navbar';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { SearchbarComponent } from './searchbar/searchbar';
import { Toolbar } from 'primeng/toolbar';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { VerticalchartsComponent } from './verticalcharts/verticalcharts';
import { ChartModule } from 'primeng/chart';
import { DockAdvancedDemo } from './dock/dock-component';
import { TerminalModule } from 'primeng/terminal';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { GalleriaModule } from 'primeng/galleria';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations:
    [FlipSwitchComponent,
      CalendarComponent,
      NavbarComponent,
      SearchbarComponent,
      VerticalchartsComponent,
      DockAdvancedDemo,],

  imports:
    [CommonModule,
      FormsModule,
      MatCardModule,
      MatDatepickerModule,
      MatNativeDateModule,
      DrawerModule,
      TerminalModule,
      DockModule,
      MenubarModule,
      ToastModule,
      DialogModule,
      TreeModule,
      GalleriaModule,
      TooltipModule,
      ButtonModule,
      Ripple,
      ChartModule,
      AvatarModule,
      StyleClass,
      Toolbar,
      ButtonModule,
      SplitButton,
      InputTextModule,
      IconField,
      InputIcon
    ],

  exports:
    [FlipSwitchComponent,
      CalendarComponent,
      NavbarComponent,
      SearchbarComponent, VerticalchartsComponent, DockAdvancedDemo],
})
export class ComponentsModule { }
