import { RegisterBean } from '../../auth/model/register-bean';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-relatives',
  templateUrl: './relatives.component.html',
  styleUrls: ['./relatives.component.css']
})
export class RelativesComponent implements OnInit {
  errorMessage$: Observable<string>;
  registerBean: RegisterBean = new RegisterBean();
  startLoading$: Observable<boolean>;
  maxDate = new Date();
  constructor() { }

  ngOnInit() {
  }
  add() {
  }
}
