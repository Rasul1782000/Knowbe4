import { AgCharts} from 'ag-charts-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlipSwitchComponent } from './flip-switch/flip-switch';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarComponent } from './calendar/calendar';
import { MatNativeDateModule } from '@angular/material/core';
import { NavbarComponent } from './navbar/navbar';
import { FileUploadModule } from 'primeng/fileupload';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Toolbar } from 'primeng/toolbar';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { VerticalchartsComponent } from './verticalcharts/verticalcharts';
import { ChartModule } from 'primeng/chart';
import { DockComponent } from './dock/dock';
import { TerminalModule } from 'primeng/terminal';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { GalleriaModule } from 'primeng/galleria';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers';
import { ColorpickerComponent } from './colorpicker/colorpicker';
import { ColorPickerModule } from 'primeng/colorpicker';
import { LinechartComponent } from './linechart/linechart';
import { ChatComponent } from './chat/chat';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OrganizationchartComponent } from './organizationalchart/organizationalchart';
import { AdvancedfiltertableComponent } from './advancedfiltertable/advancedfiltertable';
import { InputOtpModule } from 'primeng/inputotp';
import { TableModule } from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import '@angular/compiler';
import { SliderModule } from 'primeng/slider';

import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { UploadComponent } from './upload/upload';
import { AgChartsModule } from 'ag-charts-angular';
import { BadgeModule } from 'primeng/badge';
import { Timeline } from 'primeng/timeline';
import { Statusfilter } from './statusfilter/statusfilter';
import { HeaderComponent } from './header/header';
import { SharedModule } from 'primeng/api';
import { FunnelchartComponent } from './funnelchart/funnelchart';
import { ButtonComponent  } from './button/button';
import { AccordionComponent } from './accordion/accordion';
import { YesornobuttonComponent } from './yesornobutton/yesornobutton';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ReactiveFormsModule} from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { Tag } from 'primeng/tag';
import { DataView } from 'primeng/dataview';
import { FooterComponent } from './footer/footer';
import { CustomerreviewComponent } from './customerreview/customerreview';
import { MetergroupComponent } from './metergroup/metergroup';
import { CardModule } from 'primeng/card';
import { MeterGroup } from 'primeng/metergroup';
import { DatatableComponent } from './datatable/datatable';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OtppageComponent } from './otppage/otppage';
import { Customerpaymenttable } from './customerpaymenttable/customerpaymenttable';
import { ProgressBar } from 'primeng/progressbar';


@NgModule({
  declarations:
    [
      // FlipSwitchComponent,
      CalendarComponent,
      NavbarComponent,
      VerticalchartsComponent,
      DockComponent,
      CustomersComponent,
      ColorpickerComponent,
      LinechartComponent,
      ChatComponent,
      OrganizationchartComponent,
      AdvancedfiltertableComponent,
      UploadComponent,
      Statusfilter,
      HeaderComponent,
      FunnelchartComponent,
      FlipSwitchComponent,
      ButtonComponent,
      AccordionComponent,
      YesornobuttonComponent,
      FooterComponent,
      CustomerreviewComponent,
      MetergroupComponent,
      DatatableComponent,
      OtppageComponent,
      Customerpaymenttable
    ],

  imports:
    [
      ButtonModule,
      BadgeModule,
      ProgressBar,
      MeterGroup,
      AccordionModule,
      ToastModule,
      TableModule,
      AgCharts,
      Tag,
      SliderModule,
      InputOtpModule,
      ReactiveFormsModule,
      InputOtpModule,
      MessageModule,
      DataView,
      HttpClientModule,
      CommonModule,
      SharedModule,
      CardModule,
      InputTextModule,
      AgChartsModule,
      TagModule,
      // AgChartsAngularModule,
      SelectModule,
      MultiSelectModule,
      FileUploadModule,
      ButtonModule,
      ConfirmPopupModule,
      IconFieldModule,
      InputIconModule,
      OrganizationChartModule,
      FormsModule,
      MatCardModule,
      MatDatepickerModule,
      MatNativeDateModule,
      DrawerModule,
      RouterModule,
      TerminalModule,
      DockModule,
      MenubarModule,
      ToastModule,
      DialogModule,
      TreeModule,
      GalleriaModule,
      FormsModule,
      TooltipModule,
      Ripple,
      ChartModule,
      AvatarModule,
      StyleClass,
      CommonModule,
      HttpClientModule,
      ColorPickerModule,
      SplitButton,
      InputTextModule,
      IconField,
      Toolbar,
      InputIcon,
      InputIcon,
      Timeline,
      ButtonModule,
    ],

  exports:[
      // FlipSwitchComponent,
      CalendarComponent,
      NavbarComponent,
       VerticalchartsComponent, DockComponent, CustomersComponent, ColorpickerComponent, LinechartComponent, ChatComponent, OrganizationchartComponent, AdvancedfiltertableComponent, UploadComponent,HeaderComponent, FlipSwitchComponent,FunnelchartComponent,ButtonComponent,AccordionComponent,YesornobuttonComponent,FooterComponent,CustomerreviewComponent,MetergroupComponent,DatatableComponent,OtppageComponent,Customerpaymenttable
    ],
})
export class ComponentsModule { }
