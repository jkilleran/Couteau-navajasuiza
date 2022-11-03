import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGenderService {


  constructor( public _http: HttpClient) { 

  }

  getData<T>( url : string , nombre: string){

    url = "https://api.genderize.io/?name=" + nombre;
    return this._http.get<T[]>(url);

  }
}
