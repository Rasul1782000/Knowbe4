// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { CustomerService } from './customerservice';
// import { Customer } from '../../models/customer';

// describe('CustomerService', () => {
//   let service: CustomerService;
//   let httpMock: HttpTestingController;


//   const mockCustomers: Customer[] = [
//     new Customer(1, 'John', 'Doe', new Date()),
//     new Customer(2, 'Jane', 'Smith', new Date())
//   ];

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [CustomerService]
//     });

//     service = TestBed.inject(CustomerService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should fetch all customers', () => {
//     service.getCustomersall().subscribe(customers => {
//       expect(customers.length).toBe(2);
//       expect(customers).toEqual(mockCustomers);
//     });

//     const req = httpMock.expectOne('http://localhost:8004/api/customers');
//     expect(req.request.method).toBe('GET');
//     req.flush(mockCustomers);
//   });

//   it('should fetch a customer by id', () => {
//     const customer = mockCustomers[0];

//     service.getCustomer(1).subscribe(data => {
//       expect(data).toEqual(customer);
//     });

//     const req = httpMock.expectOne('http://localhost:8004/api/customers/1');
//     expect(req.request.method).toBe('GET');
//     req.flush(customer);
//   });

//   it('should create a new customer', () => {
//     const newCustomer: Customer = new Customer(3, 'Alice', 'Brown', new Date());

//     service.createCustomer(newCustomer).subscribe(data => {
//       expect(data).toEqual(newCustomer);
//     });

//     const req = httpMock.expectOne('http://localhost:8004/api/customers');
//     expect(req.request.method).toBe('POST');
//     req.flush(newCustomer);
//   });

//   it('should update an existing customer', () => {
//     const updatedCustomer: Customer = new Customer(1, 'John', 'Doe', new Date());

//     service.updateCustomer(1, updatedCustomer).subscribe(data => {
//       expect(data).toEqual(updatedCustomer);
//     });

//     const req = httpMock.expectOne('http://localhost:8004/api/customers/1');
//     expect(req.request.method).toBe('PUT');
//     req.flush(updatedCustomer);
//   });

//   it('should delete a customer', () => {
//     service.deleteCustomer(1).subscribe(response => {
//       expect(response).toBeUndefined();
//     });

//     const req = httpMock.expectOne('http://localhost:8004/api/customers/1');
//     expect(req.request.method).toBe('DELETE');
//     req.flush(null);
//   });
// });
