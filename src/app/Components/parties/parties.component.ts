import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-10%)'}),
        animate('1000ms ease-in', style({transform: 'translateY(0%)'}))
      ])
    ])
  ]
})
export class PartiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
