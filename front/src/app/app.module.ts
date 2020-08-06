import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { FootballTeamsComponent } from './pages/football-teams/football-teams.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CitiesService } from './services/cities.service';
import { UpdateModalComponent } from './pages/cities/update-modal/update-modal.component';
import { SaveModalComponent } from './pages/cities/save-modal/save-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DeleteModalComponent } from './pages/cities/delete-modal/delete-modal.component';
import { SaveTeamComponent } from './pages/football-teams/save-team/save-team.component';
import { UpdateTeamComponent } from './pages/football-teams/update-team/update-team.component';
import { DeleteTeamComponent } from './pages/football-teams/delete-team/delete-team.component';
import { SaveUserComponent } from './pages/users/save-user/save-user.component';
import { UpdateUserComponent } from './pages/users/update-user/update-user.component';
import { DeleteUserComponent } from './pages/users/delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    DialogModule
  ],
  providers: [CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
