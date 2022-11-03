import { Component, OnInit } from '@angular/core';
import { GetUniversityService } from '../get-university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.page.html',
  styleUrls: ['./university.page.scss'],
})
export class UniversityPage implements OnInit {

  
  universities: any[]=[];

  Nombre: string;


  getData(){
    this._services.getData<any[]>("", this.Nombre).subscribe(data => {
      this.universities = data;
      console.log(this.universities)
    })
  }

  constructor(public _services: GetUniversityService) { }

  ngOnInit() {
  }

}
