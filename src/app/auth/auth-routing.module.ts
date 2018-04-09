import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutSuccessComponent } from './components/logout-success/logout-success.component';
import { AuthGuardService } from '../services/auth-guard.service';

const ROUTES: Routes = [
  { path: 'register', component: RegistrationFormComponent },
  { path: 'registration-success', component: RegistrationSuccessComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'logout', component: LogoutSuccessComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }


