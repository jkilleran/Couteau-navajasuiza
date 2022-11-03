import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navaja Suiza', url: '/razor', icon: 'build' },
    { title: 'Genero', url: '/gender', icon: 'transgender' },
    { title: 'Edad', url: '/age', icon: 'golf' },
    { title: 'Universidades', url: '/university', icon: 'school' },
    { title: 'Clima', url: '/weather', icon: 'cloudy-night' },
    { title: 'Contratame', url: '/hireme', icon: 'cash' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
