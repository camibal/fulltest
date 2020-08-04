import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cities } from '../interface/cities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private endpoint: string = environment.endpoint + 'cities';

  constructor(private httpClient: HttpClient) { }

  getCities() {
    return this.httpClient.get(this.endpoint);
  }

  saveCity(cities) {
    return this.httpClient.post<any>(`${this.endpoint}`, cities);
  }

  deleteCity(id){
   return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  updateCity(id: string|number, updatedCities: Cities): Observable<Cities> {
    return this.httpClient.put(`${this.endpoint}/${id}`, updatedCities);
  }
}
