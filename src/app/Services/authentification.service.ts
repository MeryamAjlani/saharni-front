import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  private  baseUrl = 'http://localhost:3000/auth/client/';



  // call for authentication backend api with a loginRequest in parameter(email + motDePasse)
  authenticate(loginRequest): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl  + 'login', loginRequest).pipe(tap(data => {
      localStorage.setItem('userData', JSON.stringify(data.client));
      localStorage.setItem('token', JSON.stringify(data.accessToken));
    }));
  }

    // call for authentication backend api with a registerRequest in parameter(email + motDePasse)
    register(registerRequest): Observable<any> {
      return this.httpClient.post<any>(this.baseUrl + 'signup', registerRequest);
    }

  // call for authentication backend api with a loginRequest in parameter(username + motDePasse)
  getRoles(loginRequest): Observable<any> {
      const headers = new HttpHeaders({
        Authorization: localStorage.getItem('token')
      });
    // recuperation du role avec login
      return this.httpClient.get<any>(this.baseUrl + 'email/' + loginRequest.email, {headers});
  }

  isUserLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('userData'));

    // return true if user not null
    return !(user === null);
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  }

  getUser(): User {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user) {
      return new User(user.firstName, user.lastName, user.email, user.role, user.createdAt, user.updatedAt);
    }
    else {
      return null;
    }
  }
}
