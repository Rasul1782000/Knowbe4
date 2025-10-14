import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { signal } from '@angular/core';
import {EmployeeService } from '../../service/employee-service';

import { Employee } from '../../models/employee';


@Component({
  selector: 'app-employeeviewtable-component',
  standalone: false,
  templateUrl: './employeeviewtable.html',
  styleUrl: './employeeviewtable.scss'
})
export class EmployeeviewtableComponent {

    sortOptions!: SelectItem[];
    sortOrder!: number;
    status!:string;

    sortField!: string;

    employees = signal<any>([]);
    sortKey: any;

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.employeeService.getEmployees().then((data) => (this.employees.set(data.slice(0, 5))));

        this.sortOptions = [
            { label: 'Available', value: '!status' },
            { label: 'Booked  ', value: '!status' },
        ];
    }

    onSortChange(event: any) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    editEmployee(employee: Employee) {
        console.log('Edit', employee);
    }

    deleteEmployee(employee: Employee) {

        console.log('Delete', employee);
    }

    getSeverity(employee:Employee) {
        switch (employee.status) {
            default:
                return null;
        }
    };


}
