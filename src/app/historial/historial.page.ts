import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  public userInArray: any = [];
  constructor() {}

  ngOnInit() {
    this.userInArray = JSON.parse(localStorage.getItem('info')!) || [];
    console.log(this.userInArray);
  }
  getHistorialUser() {
    this.userInArray = JSON.parse(localStorage.getItem('info')!) || [];
    const infoUser = this.userInArray.forEach((cedula: any) => {
      console.log(cedula);
    });
  }
}
