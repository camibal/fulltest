import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  getCitiess;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.citiesService.getCities().subscribe(data => {
      this.getCitiess = data;
    }, err => console.error(err)
    );
  }

  getEvent(cities: any){
    this.getCities();
  }
}

