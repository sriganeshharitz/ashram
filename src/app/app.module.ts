import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ClarityModule} from '@clr/angular';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
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
import { AuthModule } from './auth/auth.module';
import { UserComponent } from './components/user/user.component';
import { RelativesComponent } from './components/relatives/relatives.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './services/auth-guard.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    TestComponent,
    UserComponent,
    RelativesComponent
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
    EffectsModule.forRoot([AuthEffects]),
    AuthModule,
    JwtModule.forRoot(
      {
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['122.166.225.182:9999']
        }
      }
    )
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
