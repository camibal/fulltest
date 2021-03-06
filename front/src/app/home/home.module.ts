import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CitiesComponent } from './cities/cities.component';
import { UsersComponent } from './users/users.component';
import { FootballTeamsComponent } from './football-teams/football-teams.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UpdateModalComponent } from './cities/update-modal/update-modal.component';
import { SaveModalComponent } from './cities/save-modal/save-modal.component';
import { DeleteModalComponent } from './cities/delete-modal/delete-modal.component';
import { SaveTeamComponent } from './football-teams/save-team/save-team.component';
import { UpdateTeamComponent } from './football-teams/update-team/update-team.component';
import { DeleteTeamComponent } from './football-teams/delete-team/delete-team.component';
import { SaveUserComponent } from './users/save-user/save-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CitiesComponent,
    UsersComponent,
    FootballTeamsComponent,
    UpdateModalComponent,
    SaveModalComponent,
    DeleteModalComponent,
    SaveTeamComponent,
    UpdateTeamComponent,
    DeleteTeamComponent,
    SaveUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  bootstrap: [HomeModule]
})
export class HomeModule { }
