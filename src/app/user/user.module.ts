import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdComponentsModule } from '../md-components/md-components.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditProfileSuccessComponent } from './components/edit-profile-success/edit-profile-success.component';
import { RelativesComponent } from './components/relatives/relatives.component';


@NgModule({
  imports: [
    MdComponentsModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    EditProfileComponent,
    EditProfileSuccessComponent,
    RelativesComponent
  ]
})
export class UserModule { }
