import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private baseUrl = 'http://localhost:8004';

  constructor(private http: HttpClient) { }


  login(): Observable<any> {
    return this.http.get(`${this.baseUrl}/login`, {  });
  }

forgotpassword():Observable<any>{
  return this.http.post(`${this.baseUrl}/forgot-password`,{});
}
}

