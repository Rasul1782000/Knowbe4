import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private baseUrl = 'http://localhost:8004';

  constructor(private http: HttpClient) { }


  SendOtp(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/otp/send`, { email });
  }


  VerifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/otp/verify`, { email, otp });
  }


  ResendOtp(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/otp/resend`, { email });
  }

}
