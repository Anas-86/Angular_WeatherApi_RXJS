import { Component } from '@angular/core';
import { WeatherApiService } from './weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location: string = '';
  // weatherData$ = this.weatherApiService.getWeather(this.location);
  country: string = '';
  region: string = '';
  localtime: string = '';
  tz_id: string = '';

  constructor(private weatherApiService: WeatherApiService) { };

  fetchData() {
    this.weatherApiService.getWeather(this.location).subscribe((response) => {
      console.log('This is the response');
      console.log(response.location);
      this.country = response.location.country;
      this.region = response.location.region;
      this.localtime = response.location.localtime;
      this.tz_id = response.location.tz_id;
      //this.country=response.location.country;
    });
  }


  onInput(value: string) {
    if (value !== '' && value !== null) {
      this.location = value;
      this.fetchData();
    }
  }
}
