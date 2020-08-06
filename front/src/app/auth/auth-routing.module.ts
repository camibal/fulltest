import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from '../auth/login/login.component';
import { StartGuard } from '../guards/start.guard';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent, canActivate: [StartGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
