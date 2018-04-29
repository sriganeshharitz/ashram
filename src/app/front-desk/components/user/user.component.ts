import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dates = [
    {arrival: '01/01/2018', departure: '05/01/2018'},
    {arrival: '14/02/2018', departure: '17/02/2018'},
    {arrival: '09/03/2018', departure: '19/03/2018'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
