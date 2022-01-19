import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient:HttpClient, private router : Router) { }
  private  baseUrl = 'http://localhost:3000/auth/client/';
  
  
  // call for authentication backend api with a loginRequest in parameter(email + motDePasse)
   authenticate(loginRequest) {    
    return this.httpClient.post<any>(this.baseUrl+'login',loginRequest)
  }

    // call for authentication backend api with a registerRequest in parameter(email + motDePasse)
    register(registerRequest) {    
      return this.httpClient.post<any>(this.baseUrl+'signup',registerRequest)
    }

  // call for authentication backend api with a loginRequest in parameter(username + motDePasse)
  getRoles(loginRequest) {
      const headers = new HttpHeaders({
        
        'Authorization':localStorage.getItem('token')
      })
      
    // recuperation du role avec login
    return  this.httpClient.get<any>(this.baseUrl+'email/'+loginRequest.email,{headers : headers})    
  }
      
  isUserLoggedIn() {
    let user = localStorage.getItem('email')

    //return true if user not null
    return !(user === null)
  }

  logOut() {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('role');    
    localStorage.removeItem('id');
    localStorage.removeItem('user');

  }
}
