import { Component } from '@angular/core';

@Component({
  selector: 'app-metergroup',
  standalone: false,
  templateUrl: './metergroup.html',
  styleUrl: './metergroup.scss'
})
export class MetergroupComponent {
value = [
        { label: 'In transit', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'pi pi-inbox' },
        { label: 'Total paid', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'pi pi-dollar' },
        { label: 'Total Unpaid', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'pi pi-box' },
        { label: 'Total Overdue', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];
}

