import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Humans } from '../domain/Humans';


@Injectable({
  providedIn: 'root'
})
export class HumanService {

    private apiUrl = 'http://localhost:8004/humansdata';

    constructor(private http: HttpClient) { }

    // Get all customers
    getHumansData(): Observable<Humans[]> {
      return this.http.get<Humans[]>(this.apiUrl);
    }
  }



