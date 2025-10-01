import { Component, ViewChild } from '@angular/core';
import { Drawer } from 'primeng/drawer';

interface MenuItem {
  label: string;
  icon: string;
  subItems?: MenuItem[];
  expanded?: boolean; // toggle state
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
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Bookmarks', icon: 'pi pi-bookmark' },
        {
          label: 'Reports',
          icon: 'pi pi-chart-line',
          expanded: false,
          subItems: [
            { label: 'View', icon: 'pi pi-table' },
            { label: 'Search', icon: 'pi pi-search' }
          ]
        },
        { label: 'Team', icon: 'pi pi-users' },
        { label: 'Messages', icon: 'pi pi-comments', badge: '3' },
        { label: 'Calendar', icon: 'pi pi-calendar' },
        { label: 'Settings', icon: 'pi pi-cog' }
      ]
    },
    {
      title: 'APPLICATION',
      expanded: false,
      items: [
        { label: 'Projects', icon: 'pi pi-folder' },
        { label: 'Performance', icon: 'pi pi-chart-bar' },
        { label: 'Settings', icon: 'pi pi-cog' }
      ]
    }
  ];

  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }

  toggleSection(section: MenuSection) {
    section.expanded = !section.expanded;
  }

  toggleItem(item: MenuItem) {
    if (item.subItems) {
      item.expanded = !item.expanded;
    }
  }
}
