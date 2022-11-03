import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAgeService {

  constructor( public _http: HttpClient ) {
   }

   getData<T>( url : string , nombre: string){

    url = "https://api.agify.io/?name=" + nombre;
    return this._http.get<T[]>(url);

  }
  
}
