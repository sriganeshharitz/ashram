import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {
  sevaPreference: string;
  isBlackLotusUser: string;
  constructor() { }

  ngOnInit() {
  }
  onChange(profession: HTMLSelectElement) {
    console.log(profession.value);
  }
}
