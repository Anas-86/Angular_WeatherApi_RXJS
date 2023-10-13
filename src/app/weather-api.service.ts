import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface WeatherResponsing {

  location: {
    country: string,
    region: string,
    localtime: string,
    tz_id: string
  }
}

@Injectable({
  providedIn: 'root'
})

export class WeatherApiService {

  private apiKey = '585a9a7c6fe0472fb21155407231310';
  private apiUrl = 'https://api.weatherapi.com/v1/timezone.json';

  constructor(private http: HttpClient) { }

  getWeather(location: string) {
    return this.http.get<WeatherResponsing>(`${this.apiUrl}?q=${location}&lang=en`, {
      headers: {
        key: `${this.apiKey}`,
        alerts: 'yes'
      }
    });
  }
}

//${this.apiUrl}?key=${this.apiKey}&q=${location}