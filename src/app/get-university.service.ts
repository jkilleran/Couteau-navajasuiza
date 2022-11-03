import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUniversityService {

  constructor( public _http: HttpClient ) { }


  getData<T>( url : string , nombre: string){

    url = "http://universities.hipolabs.com/search?country=" + nombre;
    return this._http.get<T[]>(url);

  }
}
