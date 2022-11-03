import { Component, OnInit } from '@angular/core';
import { GetGenderService } from '../get-gender.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  genero: any[]=[];

  Nombre: string;


  gender: string;


  getData(){
    this._services.getData<any[]>("", this.Nombre).subscribe(data => {
      this.genero = data;
      if(this.genero["gender"] == "male"){
        this.gender = "Hombre";
      }else if(this.genero["gender"] == "female"){
        this.gender = "Mujer"
      }
    })
  }


  constructor(public _services: GetGenderService) { 
  }

  ngOnInit() {
  }

}
