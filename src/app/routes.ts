import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegistrationFormComponent} from './auth/components/registration-form/registration-form.component';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { RegistrationSuccessComponent } from './auth/components/registration-success/registration-success.component';
import { AuthGuardService } from './services/auth-guard.service';

export const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];
