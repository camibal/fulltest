import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endpoint: string = environment.endpoint + 'users';

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.endpoint);
  }

  saveUser(cities) {
    return this.httpClient.post<any>(`${this.endpoint}`, cities);
  }

  deleteUser(id) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  updateUser(id: string | number, updatedCities: Users): Observable<Users> {
    return this.httpClient.put(`${this.endpoint}/${id}`, updatedCities);
  }
}