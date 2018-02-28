import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {DateFormatter} from '@angular/common/src/pipes/deprecated/intl';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    RegistrationFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
