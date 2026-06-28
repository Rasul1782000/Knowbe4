import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* PrimeNG Modules */
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputOtpModule } from 'primeng/inputotp';
import { TableModule } from 'primeng/table';
import { DrawerModule } from 'primeng/drawer';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { Ripple } from 'primeng/ripple';
import { StyleClass } from 'primeng/styleclass';
import { SplitButton } from 'primeng/splitbutton';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { ChartModule } from 'primeng/chart';
import { TerminalModule } from 'primeng/terminal';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { GalleriaModule } from 'primeng/galleria';
import { TooltipModule } from 'primeng/tooltip';
import { ColorPickerModule } from 'primeng/colorpicker';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DividerModule } from 'primeng/divider';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MessageModule } from 'primeng/message';
import { Tag } from 'primeng/tag';
import { DataView } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { MeterGroup } from 'primeng/metergroup';
import { ProgressBar } from 'primeng/progressbar';
import { Tooltip } from 'primeng/tooltip';
import { InputText } from 'primeng/inputtext';
import { SplitterModule } from 'primeng/splitter';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { Timeline } from 'primeng/timeline';
import { Avatar } from 'primeng/avatar';
import { Menubar } from 'primeng/menubar';

/* Angular Material Modules */
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/* Other Libraries */
import { HighchartsChartComponent } from 'highcharts-angular';
import { TabsModule } from 'primeng/tabs';
import { AgCharts } from 'ag-charts-angular';
import { AgChartsModule } from 'ag-charts-angular';
import { SharedModule } from 'primeng/api';

/* App Components */
import { CalendarComponent } from './calendar/calendar';
import { NavbarComponent } from './navbar/navbar';
import { VerticalchartsComponent } from './verticalcharts/verticalcharts';
import { DockComponent } from './dock/dock';
import { CustomersComponent } from './customers/customers';
import { ColorpickerComponent } from './colorpicker/colorpicker';
import { LinechartComponent } from './linechart/linechart';
import { ChatComponent } from './chat/chat';
import { OrganizationchartComponent } from './organizationalchart/organizationalchart';
import { AdvancedfiltertableComponent } from './advancedfiltertable/advancedfiltertable';
import { UploadComponent } from './upload/upload';
import { Statusfilter } from './statusfilter/statusfilter';
import { HeaderComponent } from './header/header';
import { FlipSwitchComponent } from './flip-switch/flip-switch';
import { ButtonComponent } from './button/button';
import { AccordionComponent } from './accordion/accordion';
import { YesornobuttonComponent } from './yesornobutton/yesornobutton';
import { FooterComponent } from './footer/footer';
import { CustomerreviewComponent } from './customerreview/customerreview';
import { MetergroupComponent } from './metergroup/metergroup';
import { DatatableComponent } from './datatable/datatable';
import { OtppageComponent } from './otppage/otppage';
import { CustomerpaymenttableComponent } from './customerpaymenttable/customerpaymenttable';
import { SearchComponent } from './search/search';
import { RevenuegraphComponent } from './revenuegraph/revenuegraph';
import { PiechartComponent } from './piechart/piechart';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs';
import { CreditcardComponent } from './creditcard/creditcard';
import { SplitterComponent } from './splitter/splitter';
import { Balancechart } from './balancechart/balancechart';
import { AreachartComponent } from './areachart/areachart';
import { ReactivesubmitformComponent } from './reactivesubmitform/reactivesubmitform';
import { Submitbutton } from './submitbutton/submitbutton';
import { CurrentplanComponent } from './currentplan/currentplan';
import { Treechart } from './treechart/treechart';
import { Carouselcardcomponent } from './carouselcard/carouselcard';
import { Footer2forservicesComponent } from './footer2forservices/footer2forservices';
import { RatingstarComponent } from './ratingstar/ratingstar';
import { DividerwithwordsComponent } from './dividerwithwords/dividerwithwords';
import { StatswithimagesComponent } from './statswithimages/statswithimages';
import { TimelinebydaisyComponent } from './timelinebydaisy/timelinebydaisy';
import { LayoutComponent } from './layout/layout';

@NgModule({
  declarations: [
    LayoutComponent,
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
    FlipSwitchComponent,
    ButtonComponent,
    AccordionComponent,
    YesornobuttonComponent,
    FooterComponent,
    CustomerreviewComponent,
    MetergroupComponent,
    DatatableComponent,
    OtppageComponent,
    CustomerpaymenttableComponent,
    SearchComponent,
    RevenuegraphComponent,
    PiechartComponent,
    BreadcrumbsComponent,
    CreditcardComponent,
    SplitterComponent,
    Balancechart,
    AreachartComponent,
    ReactivesubmitformComponent,
    Submitbutton,
    CurrentplanComponent,
    Treechart,
    Carouselcardcomponent,
    Footer2forservicesComponent,
    RatingstarComponent,
    DividerwithwordsComponent,
    StatswithimagesComponent,
    TimelinebydaisyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    InputOtpModule,
    TableModule,
    DrawerModule,
    Toolbar,
    AvatarModule,
    BadgeModule,
    Ripple,
    StyleClass,
    SplitButton,
    IconField,
    InputIcon,
    ChartModule,
    TerminalModule,
    DockModule,
    MenubarModule,
    ToastModule,
    DialogModule,
    TreeModule,
    GalleriaModule,
    TooltipModule,
    ColorPickerModule,
    OrganizationChartModule,
    AccordionModule,
    SliderModule,
    SelectModule,
    TagModule,
    MultiSelectModule,
    IconFieldModule,
    InputIconModule,
    DividerModule,
    ConfirmPopupModule,
    MessageModule,
    Tag,
    DataView,
    CardModule,
    MeterGroup,
    ProgressBar,
    Tooltip,
    InputText,
    SplitterModule,
    TextareaModule,
    FileUploadModule,
    Timeline,
    Avatar,
    Menubar,
    TabsModule,
    AgCharts,
    AgChartsModule,
    SharedModule,
    HighchartsChartComponent,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    LayoutComponent,
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
    HeaderComponent,
    FlipSwitchComponent,
    ButtonComponent,
    AccordionComponent,
    YesornobuttonComponent,
    FooterComponent,
    CustomerreviewComponent,
    MetergroupComponent,
    DatatableComponent,
    OtppageComponent,
    CustomerpaymenttableComponent,
    SearchComponent,
    RevenuegraphComponent,
    PiechartComponent,
    BreadcrumbsComponent,
    CreditcardComponent,
    SplitterComponent,
    AreachartComponent,
    ReactivesubmitformComponent,
    CurrentplanComponent,
    Carouselcardcomponent,
    Footer2forservicesComponent,
    RatingstarComponent,
    DividerwithwordsComponent,
    StatswithimagesComponent,
    TimelinebydaisyComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
