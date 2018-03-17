import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RegistrationFormComponent} from './auth/components/registration-form/registration-form.component';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './components/test/test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdComponentsModule} from './md-components/md-components.module';
import {HttpClientModule} from '@angular/common/http';
import {AppErrorHandler} from './errors/app-error-handler';
import {AuthService} from './auth/services/auth.service';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects/';
import { AuthEffects } from './auth/services/auth.effects';
import { RegistrationSuccessComponent } from './auth/components/registration-success/registration-success.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    TestComponent,
    RegistrationSuccessComponent
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
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects])
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
