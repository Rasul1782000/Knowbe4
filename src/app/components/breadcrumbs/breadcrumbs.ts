import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.html',
  styleUrls: ['./breadcrumbs.scss'],
  standalone:false,
})
export class BreadcrumbsComponent {
  activeTab: string = 'basicinfo';

  tabs = [
    { route: 'basicinfo', label: 'Basic Info', icon: 'pi pi-settings' },
    { route: 'billing', label: 'Planning and Billing', icon: 'pi pi-dollar' },
    { route: 'mode', label: 'Appearance', icon: 'pi pi-moon' },
    { route: 'membership', label: 'Become Premium Member', icon: 'pi pi-crown' }
  ];

  selectingTab(tabRoute: string) {
    this.activeTab = tabRoute;
  }
}
