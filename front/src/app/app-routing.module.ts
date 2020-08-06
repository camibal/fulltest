import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FootballTeamsComponent } from './pages/football-teams/football-teams.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginGuard } from './guards/login.guard';
import { StartGuard } from './guards/start.guard';

const routes: Routes = [
  //login
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },

  //dashboard
  // { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
