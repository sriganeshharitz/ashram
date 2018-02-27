import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegistrationFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: '**', component: NotFoundComponent}
];
