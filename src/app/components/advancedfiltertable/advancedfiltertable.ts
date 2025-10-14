import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer, Representative } from '../../models/customer';
import { CustomerService } from '../../service/services/customerservice';

@Component({
  selector: 'app-advancedfiltertable',
  templateUrl: './advancedfiltertable.html',
  styleUrls: ['./advancedfiltertable.scss'],
  standalone: false,
  providers: [CustomerService]
})
export class AdvancedfiltertableComponent implements OnInit {

  @ViewChild('dt1') dt1!: Table;

  customers: Customer[] = [];
  selectedCustomers: Customer[] = [];
  representatives: Representative[] = [];
  statuses: any[] = [];
  loading: boolean = true;
  searchValue: string = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    // Representative list
    this.representatives = [
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

    // Status options
    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];

    // Fetch customers
    this.customerService.getCustomersall().subscribe((customers: Customer[]) => {
      this.customers = customers.map((c, i) => {
        return new Customer(
          c.id,
          c.date ? new Date(c.date) : new Date(),          // date
          c.firstName ?? '',                               // name (you can decide what to put here)
          c.firstName ?? '',                               // firstName
          c.lastName ?? '',                                // lastName
          c.email ?? '',                                   // email
          c.phone ?? '',                                   // phone
          c.address ?? '',                                 // address
          this.representatives[i % this.representatives.length], // full Representative object
          c.createdAt ? new Date(c.createdAt) : undefined,
          c.updatedAt ? new Date(c.updatedAt) : undefined
        );
      });
      this.loading = false;
    });
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }

  // Type-safe global filter getter
  get globalFilterValue(): string {
    const filter = this.dt1?.filters['global'];
    return Array.isArray(filter) ? filter[0]?.value ?? '' : filter?.value ?? '';
  }

  getSeverity(status: string | null | undefined): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | null {
    switch (status?.toLowerCase()) {
      case 'unqualified': return 'danger';
      case 'qualified': return 'success';
      case 'new': return 'info';
      case 'negotiation': return 'warn';
      case 'renewal': return 'secondary';
      default: return 'secondary';
    }
  }
}
