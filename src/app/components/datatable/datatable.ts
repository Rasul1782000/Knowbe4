import { Workerservice } from './../../service/workerservice';
import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer,Representative } from '../../models/customer';

@Component({
  selector: 'app-datatable',
  standalone: false,
  templateUrl: './datatable.html',
  styleUrl: './datatable.scss',
  providers: [Workerservice]

})
export class DatatableComponent {
  customers!: Customer[];

    representatives!: Representative[];

    value!: any;
    statuses!: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    constructor(private workerservice: Workerservice) {}

    ngOnInit() {
        this.workerservice.getCustomersLarge().then((customers) => {
            this.customers = customers;
            this.loading = false;

            this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
        });

        this.representatives= [
            { name: 'Amy Elsner', imageUrl: 'amyelsner.png' },
            { name: 'Anna Fali', imageUrl: 'annafali.png' },
            { name: 'Asiya Javayant', imageUrl: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', imageUrl: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', imageUrl: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', imageUrl: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', imageUrl: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', imageUrl: 'onyamalimba.png' },
            { name: 'Stephen Shaw', imageUrl: 'stephenshaw.png' },
            { name: 'Xuxue Feng', imageUrl: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }

    clear(table: Table) {
        table.clear();
    }


    getSeverity(status: string): "success" | "secondary" | "info" | "warn" | "danger" | "contrast" | null {
  switch (status) {
    case 'unqualified': return 'danger';
    case 'qualified':   return 'success';
    case 'new':         return 'info';
    case 'negotiation': return 'warn';
    case 'renewal':     return null;
    default:            return null;
  }
}

}
