import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {CREATE_USER, LOGIN_USER} from './url';
import {NgForm} from '@angular/forms';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {retry} from 'rxjs/operators/retry';
import {catchError} from 'rxjs/operators';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  register(registerBean) {
    return this.http.post(
      CREATE_USER,
      JSON.stringify(registerBean),
      {headers: {'Content-Type' : 'application/json'}})
      .pipe(
        // retry( 3),
        catchError(this.handleErrors)
      );
  }
  login(loginBean) {
    return this.http.post(LOGIN_USER, JSON.stringify(loginBean));
  }
  logout() {
  }
  isLoggedIn() {
  }

  handleErrors(response: HttpErrorResponse) {
    if (response instanceof ErrorEvent) {
      console.error('Client side error and error is ' + response.error);
    } else {
      console.error('Server side error and code is ' + response.status);
      console.error('Server side error and error is ' + response.error);
    }
    return new ErrorObservable('Oops something bad happened, try again');
  }
}
