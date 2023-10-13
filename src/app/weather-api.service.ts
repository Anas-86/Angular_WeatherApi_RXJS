import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface WeatherResponsing {
  alerts: {
    alert: {
      headline: string;
      severity: string;
      event: string;
    }[];
  }
}

@Injectable({
  providedIn: 'root'
})

export class WeatherApiService {

  private apiKey = '585a9a7c6fe0472fb21155407231310';
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get<WeatherResponsing>(`${this.apiUrl}?key=${this.apiKey}&q=${location}`, {
      headers: {
        key: `${this.apiKey}`,
        lang: 'de',
        q: `${location}`
      }
    });
  }
}

//${this.apiUrl}?key=${this.apiKey}&q=${location}