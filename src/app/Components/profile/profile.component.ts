import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  user = {
    fname: 'Youssef',
    lname: 'Jerbi',
    email: 'youssefjerbi@gmail.com',
    lastReservations: [
      {bar: 'Billionaire', date: '2020-20-11'},
      {bar: 'Coachella', date: '2021-07-09'},
      {bar: 'Tomorrowland', date: '2022-05-01'}
    ],
    type: 'Client'
  };

  ngOnInit(): void {
  }

}
