import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../service/services/customerservice';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.html',
  styleUrls: ['./customers.scss'],
  standalone: false,
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  loading: boolean = true;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.loading = true;
    this.customerService.getCustomersall().subscribe({
      next: (data) => {
        this.customers = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading customers:', err);
        this.loading = false;
      }
    });
  }

  addCustomer(): void {
    const newCustomer: Customer = {
      id: 0,
      firstName: 'New',
      lastName: 'Customer',
      email: 'newcustomer@example.com',
      get fullName() {
        return `${this.firstName} ${this.lastName}`;
      },
      date: new Date(),
      name: '',
      phone: '',
      address: '',
      representative: { name: '' }
    };

    this.customerService.createCustomer(newCustomer).subscribe(() => {
      this.loadCustomers();
    });
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.customers = this.customers.filter(c => c.id !== id);
    });
  }
}
