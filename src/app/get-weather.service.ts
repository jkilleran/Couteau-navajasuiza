import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(public _http: HttpClient) { }

  getData<T>( url : string){
    url = "https://api.openweathermap.org/data/2.5/weather?lat=18.483&lon=-69.929&appid=61b77595ac96f3c78702012252f8818a&units=metric";
    return this._http.get<T[]>(url);
  }

  
}
