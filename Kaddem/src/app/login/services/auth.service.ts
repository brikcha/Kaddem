import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { TokenStorageService } from './token-storage.service';

// Service that sends login requests to back-end

const AUTH_API = environment.API_URL + '/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  login(credentials:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username:credentials.username,
        password:credentials.password

      },
      httpOptions
    );
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  register(user:any): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username:user.username,
        email:user.email,
        password:user.password,
      },
      httpOptions
    );
  }
}
