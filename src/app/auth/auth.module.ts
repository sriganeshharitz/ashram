import { MdComponentsModule } from '../md-components/md-components.module';
import { CustomFormsModule } from 'ng2-validation';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { LogoutSuccessComponent } from './components/logout-success/logout-success.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditProfileSuccessComponent } from './components/edit-profile-success/edit-profile-success.component';
import { ClarityModule } from '@clr/angular';
import { DateOfThePastDirective } from './directives/date-of-the-past.directive';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
  imports: [
    ClarityModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    CustomFormsModule,
    MdComponentsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  declarations: [
    RegistrationFormComponent,
    LoginFormComponent,
    RegistrationSuccessComponent,
    LogoutSuccessComponent,
    EditProfileComponent,
    EditProfileSuccessComponent,
    DateOfThePastDirective
  ],
  exports: [
  ]
})
export class AuthModule { }

