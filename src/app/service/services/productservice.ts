// src/service/productservice.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Clark-Kent',
      Nationality: 'USA',
      Designation: 'Sales',
      image: 'https://tse3.mm.bing.net/th/id/OIP.1Fkm19xoZD-S1xop72493AHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 2,
      name: 'John-Doe',
      Nationality: 'Canada',
      Designation: 'Full Stack Developer',
      image: 'https://th.bing.com/th/id/OIP.xpFQKOauiIknd1glNJSPaQHaHa?w=179&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3'
    },
    {
      id: 3,
      name: 'Will-Smith',
      Nationality: 'Germany',
      Designation: 'Plumber',
      image: 'https://th.bing.com/th/id/OIP.f2OwL4rSn6QrEbSeeuN4NQHaHa?w=179&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3'
    },
  ];


  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductsSmall(): Observable<Product[]> {
    return of(this.products);
  }

  getTopProducts(limit: number): Observable<Product[]> {
    return of(this.products.slice(0, limit));
  }
}