import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Teams } from '../interface/teams';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private endpoint: string = environment.endpoint + 'teams';

  constructor(private httpClient: HttpClient) { }

  getTeams() {
    return this.httpClient.get(this.endpoint);
  }

  saveTeam(teams) {
    return this.httpClient.post<any>(`${this.endpoint}`, teams);
  }

  deleteTeam(id) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  updateTeam(id: string | number, updatedTeams: Teams): Observable<Teams> {
    return this.httpClient.put(`${this.endpoint}/${id}`, updatedTeams);
  }
}
