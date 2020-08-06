import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { SaveUserComponent } from './users/save-user/save-user.component';
import { DeleteTeamComponent } from './football-teams/delete-team/delete-team.component';
import { UpdateTeamComponent } from './football-teams/update-team/update-team.component';
import { SaveTeamComponent } from './football-teams/save-team/save-team.component';
import { DeleteModalComponent } from './cities/delete-modal/delete-modal.component';
import { SaveModalComponent } from './cities/save-modal/save-modal.component';
import { UpdateModalComponent } from './cities/update-modal/update-modal.component';
import { FootballTeamsComponent } from './football-teams/football-teams.component';
import { CitiesComponent } from './cities/cities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,

    UsersComponent,
    CitiesComponent,
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
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
