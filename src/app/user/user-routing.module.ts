import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditProfileSuccessComponent } from './components/edit-profile-success/edit-profile-success.component';
import { RelativesComponent } from './components/relatives/relatives.component';

const routes: Routes = [
  {path: 'user/dashboard', component: UserComponent, canActivate: [AuthGuardService]},
  {path: 'user/edit', component: EditProfileComponent, canActivate: [AuthGuardService]},
  {path: 'user/edit-success', component: EditProfileSuccessComponent, canActivate: [AuthGuardService]},
  {path: 'user/relatives', component: RelativesComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
