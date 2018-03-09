import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';


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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './components/test/test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdComponentsModule} from './md-components/md-components.module';
import {HttpClientModule} from '@angular/common/http';
import {AppErrorHandler} from './errors/app-error-handler';
import {AuthService} from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MdComponentsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
