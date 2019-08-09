import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const AUTH_LINK = 'http://localhost:3000/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  isAutheticated() {
    return !!localStorage.getItem('token');
  }
  login(user): Observable<any> {
    return this.http.post(AUTH_LINK, user);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
