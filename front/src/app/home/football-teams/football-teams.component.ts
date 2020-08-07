import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-football-teams',
  templateUrl: './football-teams.component.html',
  styleUrls: ['./football-teams.component.scss']
})
export class FootballTeamsComponent implements OnInit {
  getTeamss;

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamsService.getTeams().subscribe(data => {
      this.getTeamss = data;
    }, err => console.error(err)
    );
  }

  getEvent(cities: any) {
    this.getTeams();
  }
}

