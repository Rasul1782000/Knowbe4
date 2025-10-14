import { Representative } from './../../models/employee';
import { Component,signal } from '@angular/core';
import { Table } from 'primeng/table';
import { CustomerService } from '../../service/services/customerservice';
import { Humans } from '../../domain/Humans';
import { OnInit } from '@angular/core';
import { HumanService } from '../../service/humanservice';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customerpaymenttable',
  standalone: false,
  templateUrl: './customerpaymenttable.html',
  styleUrl: './customerpaymenttable.scss',
  providers: [CustomerService]
})

export class Customerpaymenttable implements OnInit {

    customers!:Humans [];

    representatives!: Representative[];

    statuses!: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];
    value= signal('');

    searchValue: string | undefined;

    constructor(private HumanService: HumanService) {}

    ngOnInit() {
        this.HumanService.getHumansData().forEach((Humans: Humans[]) => {
            this.customers = Humans;
            this.loading = false;

            this.customers.forEach((customer) => (customer.date = new Date(<Date><unknown>customer.date)));
        });

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
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
        this.searchValue = ''
    }

getSeverity(status: string): 'danger' | 'success' | 'info' | 'warn' | null {
    switch (status.toLowerCase()) {
        case 'unqualified':
            return 'danger';
        case 'qualified':
            return 'success';
        case 'new':
            return 'info';
        case 'negotiation':
            return 'warn';
        case 'renewal':
            return null;
        default:
            return null; // <-- ensures a value is always returned
    }
}

}






