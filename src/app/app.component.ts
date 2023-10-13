import { Component } from '@angular/core';
import { WeatherApiService } from './weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  country: string = '';
  localtime: string = '';
  tz_id: string = '';

  constructor(private weatherApiService: WeatherApiService) {
    this.weatherApiService.getWeather().subscribe((response) => {
      console.log('This is the response');
      console.log(response.location);
      this.country=response.location.country;
      this.localtime=response.location.localtime;
      this.tz_id=response.location.tz_id;
      //this.country=response.location.country;
    });
  }
}
