import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { CreateUserSuccessComponent } from './components/create-user-success/create-user-success.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

const ROUTES: Routes = [
    {path: 'user/create', component: CreateUserFormComponent},
    {path: 'user/create/success', component: CreateUserSuccessComponent},
    {path: 'users', component: UsersComponent},
    {path: 'user', component: UserComponent}
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
export class FrontDeskRoutingModule { }