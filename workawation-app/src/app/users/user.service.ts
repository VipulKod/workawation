import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInRequest, SignUpRequest } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  signUp(payload: SignUpRequest): Observable<any> {
    return this.http.post('http://localhost:8000/api/auth/register', payload);
  }

  signIn(payload: SignInRequest): Observable<any> {
    return this.http.post('http://localhost:8000/api/auth/login', payload);
  }
}
