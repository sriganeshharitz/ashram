import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selected: boolean
  selectedUser: any;
  editEnabled: boolean;
  selectedForDelete: boolean;
  users = [
    // {firstName: 'Ramesh', lastName: 'Yadav', dateOfBirth: '07/09/1999', phoneNumber: '123456789', email: 'rameshyadav@example.com', photo: 'person.gif'},
    {firstName: 'Ramesh', lastName: 'Kumar', dateOfBirth: '05/11/1985', phoneNumber: '123456789', email: 'rameshkumarv@example.com', photo: 'person.gif'},
    {firstName: 'Ramesh', lastName: 'Kulkarni', dateOfBirth: '17/09/1989', phoneNumber: '123456789', email: 'rameshkulkarni@example.com', photo: 'person.gif'}
  ];
  constructor() { }

  ngOnInit() {
  }
  open(selectedUser) {
    this.selected = true;
    this.selectedUser = selectedUser;
  }
  edit() {
    this.editEnabled = true;
  }
  delete() {
    this.selectedForDelete = true;
  }
}
