import { Component, OnInit } from '@angular/core';
import { GetAgeService } from '../get-age.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit {
  

  age: any[]=[];

  Nombre: string;

  Eres:  string;

  child: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2LKshWGnVprZ05Aau54IWKqOOmQYB6dTxvGrw50i8OO8pXse-Tyoy-pa64cXiz-0XDc&usqp=CAU";

  young: string = "https://img.freepik.com/premium-vector/young-man-cartoon_24640-35046.jpg?w=2000";

  adult:  string = "https://previews.123rf.com/images/jemastock/jemastock1711/jemastock171101345/88968236-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-de-la-historieta-del-hombre-adulto.jpg";

  old: string = "https://friendlystock.com/wp-content/uploads/2018/03/2-weak-old-man-with-hip-pain-cartoon-clipart.jpg";

  img: string ="https://www.datoinf.com/wp-content/uploads/2020/04/edase.png";

  dead: string = "https://thumbs.dreamstime.com/z/death-cartoon-illustration-old-man-34979764.jpg";


  getData(){
    this._services.getData<any[]>("", this.Nombre).subscribe(data => {

      this.age = data;
      console.log(this.age["age"]);

      if(this.age["age"] < 12){
        this.img = this.child;
        this.Eres = "Un niñito";
      }else if(this.age["age"]<22){
        this.img = this.young;
        this.Eres = "Joven";
      }else if(this.age["age"] < 50){
        this.img = this.adult;
        this.Eres = "Adulto";
      }else if(this.age["age"]< 150){
        this.img = this.old;
        this.Eres = "Un Viejito";
      }else{
        this.img = this.dead;
        this.Eres = "Un fantasma";
      }

    })
  }

  constructor(public _services: GetAgeService) { }

  ngOnInit() {
  }

}
