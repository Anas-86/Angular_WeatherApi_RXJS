import { Component } from '@angular/core';
import { WeatherApiService } from './weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headline: string = '';
  severity: string = '';
  event: string = '';

  constructor(private weatherApiService: WeatherApiService) {
    this.weatherApiService.getWeather().subscribe((response) => {
      console.log('This is the response');
      console.log(response);
    });
  }
}
