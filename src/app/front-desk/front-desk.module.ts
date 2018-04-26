import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdComponentsModule } from '../md-components/md-components.module';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { FrontDeskRoutingModule } from './front-desk-routing.module';
import { CreateUserSuccessComponent } from './components/create-user-success/create-user-success.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  imports: [
    MdComponentsModule,
    FrontDeskRoutingModule
  ],
  declarations: [CreateUserFormComponent, CreateUserSuccessComponent, UsersComponent]
})
export class FrontDeskModule { }
