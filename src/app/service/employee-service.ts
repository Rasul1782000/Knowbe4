import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(): Promise<any[]> {
    return Promise.resolve(this.getEmployeeData());
  }

  getEmployeeData(): any[] {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'John11@gmail.com',
        position: 'Full-stack Developer',
        status: 'Available',
        phone: '123-456-7890',
        date: new Date('2023-01-15'),
        imageUrl: 'https://i.fbcd.co/products/resized/resized-750-500/c-1000-designbundle-rich-successful-black-businessman-v-3-22-12-d8f6e0b988e4a0fc8ebdbd4d7c12992315ac8d3dab3af2f39ae45ed441410140.jpg'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'Jane12@gmail.com',
        position: 'UI/UX Designer',
        status: 'Busy',
        phone: '987-654-3210',
        date: new Date('2023-02-20'),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQfn_vYsLtp-bCqBxd9Dtx30L0WD_pjTCgw&s'
      },
      {
        id: 3,
        name: 'Johnson',
        email: 'Johnsonin29@gmail.com',
        position: 'Backend Developer',
        status: 'Booked',
        phone: '555-123-4567',
        date: new Date('2023-03-10'),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmV-ps3GfP8CNS5-RQ-JFa_plq8qcgkkMFA&s'
      }
    ];
  }
}
