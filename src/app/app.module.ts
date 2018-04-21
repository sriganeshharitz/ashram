import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { TestComponent } from './components/test/test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdComponentsModule} from './md-components/md-components.module';
import {HttpClientModule} from '@angular/common/http';
import {AppErrorHandler} from './errors/app-error-handler';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects/';
import { AuthEffects } from './auth/services/auth.effects';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@auth0/angular-jwt';
import { RecaptchaModule } from 'ng-recaptcha';
import { UserModule } from './user/user.module';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    TestComponent
  ],
  imports: [
    AuthModule,
    UserModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MdComponentsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    JwtModule.forRoot(
      {
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['122.166.225.182:9999']
        }
      }
    ),
    RecaptchaModule.forRoot()
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
