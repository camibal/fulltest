import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FootballTeamsComponent } from './pages/football-teams/football-teams.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { StartGuard } from './guards/start.guard';


const routes: Routes = [
  //login
  { path: 'login', component: LoginComponent, canActivate: [StartGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
    
  //DASHBOARD
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard] },
  { path: 'users', component: UsersComponent, canActivate: [LoginGuard] },
  { path: 'cities', component: CitiesComponent, canActivate: [LoginGuard] },
  { path: 'football-teams', component: FootballTeamsComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
