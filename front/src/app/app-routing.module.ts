import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { StartGuard } from './guards/start.guard';

const routes: Routes = [
  //login
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [StartGuard] },
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [LoginGuard] },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
