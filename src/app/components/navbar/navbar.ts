import { Component, ViewChild } from '@angular/core';
import { Drawer } from 'primeng/drawer';
import { Router } from '@angular/router';   // ✅ Use Router, not RouterModule

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  subItems?: MenuItem[];
  expanded?: boolean;
  badge?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  standalone: false,
})
export class NavbarComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;
  visible: boolean = false;

  menuSections: MenuSection[] = [
    {
      title: 'FAVORITES',
      expanded: true,
      items: [
        { label: 'Dashboard', icon: 'pi pi-home', route: '/home' },
        { label: 'Billing and Payment', icon: 'pi pi-dollar', route: '/payment' },
        {
          label: 'Reports',
          icon: 'pi pi-chart-line',
          expanded: false,
          subItems: [
            { label: 'View', icon: 'pi pi-table', route: '/reports/view' },
            { label: 'Search', icon: 'pi pi-search', route: '/reports/search' }
          ]
        },
        { label: 'Team', icon: 'pi pi-users', route: '/teams' },
        { label: 'Messages', icon: 'pi pi-comments', badge: '3', route: '/messages' },
        { label: 'Calendar', icon: 'pi pi-calendar', badge: '4', route: '/calendar' },
        { label: 'Settings', icon: 'pi pi-cog', route: '/settings' }
      ]
    },
    {
      title: 'APPLICATION',
      expanded: false,
      items: [
        { label: 'Projects', icon: 'pi pi-folder', route: '/application/projects' },
        { label: 'Services', icon: 'pi pi-chart-bar', route: '/application/services' },
      ]
    },

    {
      title: 'Tools',
      expanded:false,
      items: [
        { label: 'Email', icon: 'pi pi-email', route: '/crm-app/src/app/page/tools/email'},
        {label: 'Automation', icon: 'pi pi-', route: '/crm-app/src/app/page/tools/automation'},
        {label: 'Integration', icon: 'pi pi-settings', route: '/crm-app/src/app/page/tools/integration'},
      ]

    }
  ];

  constructor(private router: Router) { }

  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }

  toggleSection(section: MenuSection) {
    section.expanded = !section.expanded;
  }

  toggleItem(item: MenuItem) {
    if (item.subItems) {
      item.expanded = !item.expanded;
    } else if (item.route) {
      this.router.navigate([item.route]);
      this.visible = false;
    }
  }
}
