import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  Weather: any[]=[];

  Weather2: any[] = [];

  state: string;

  constructor(public _services: GetWeatherService) { 

    this._services.getData<any[]>("").subscribe(data => {
      this.Weather = data;
      this.Weather2 = this.Weather["weather"]; 
      //console.log(this.Weather2["0"]["description"]);
    })
  }

  @ViewChild('popover') popover;

  isOpen = false;
  isOpen2 = false;
  isOpen3 = false;
  isOpen4 = false;
  
  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  presentPopover2(e: Event) {
    this.popover.event = e;
    this.isOpen2 = true;
  }

  presentPopover3(e: Event) {
    this.popover.event = e;
    this.isOpen3 = true;
  }
  presentPopover4(e: Event) {
    this.popover.event = e;
    this.isOpen4 = true;
  }



  Imagen1="https://media.wired.co.uk/photos/606dba1c9a15f73a597a2aa1/master/w_1600%2Cc_limit/weather.jpg";


  ngOnInit() {
  }

}
