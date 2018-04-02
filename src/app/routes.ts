import { EditProfileComponent } from './auth/components/edit-profile/edit-profile.component';
import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegistrationFormComponent} from './auth/components/registration-form/registration-form.component';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { RegistrationSuccessComponent } from './auth/components/registration-success/registration-success.component';
import { UserComponent } from './components/user/user.component';
import { RelativesComponent } from "./components/relatives/relatives.component";

export const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'profile', component: UserComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  { path: 'relatives', component: RelativesComponent },
  {path: 'home', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];
