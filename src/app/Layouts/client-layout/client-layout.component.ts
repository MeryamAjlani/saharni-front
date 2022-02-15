import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit {

  constructor(private auth: AuthentificationService , private router : Router) { }
  user : User
  ngOnInit(): void {
  }
  logout(): void {
    this.auth.logOut();
    this.user = null;
    this.router.navigate(['/']);
  }
}
