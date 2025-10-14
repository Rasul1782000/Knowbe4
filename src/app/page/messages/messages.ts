import { Component } from '@angular/core';
import { CustomerService } from '../../service/services/customerservice';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-MessagesComponent',
  standalone: false,
  providers: [CustomerService],
  templateUrl: './messages.html',
  styleUrl: './messages.scss'
})
export class Messages {
  customers!: Customer[];
  first = 0;
  rows = 10;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersall().subscribe((customers: Customer[]) => (this.customers = customers));
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.customers ? this.first + this.rows >= this.customers.length : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }
}