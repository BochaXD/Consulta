import { Component, OnInit } from '@angular/core';
import { DatosInfo, Info } from '../interfaces/usuarios';
import { FirestoreService } from '../servicios/basedatos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public cedulas: DatosInfo[] = [];
  public cedula = null;
  public nombre = '';
  public info: any = [];
  public userInArray: any = [];
  public local: any = [];
  /*  public transactionObjJson: any = []; */
  constructor(private firestormService: FirestoreService) {}
  ngOnInit() {
    /*    console.log('Inicio'); */
    this.firestormService.getDatos().subscribe((prod: any[]) => {
      this.cedulas = prod;
      /*   console.log(this.cedulas); */
    });
  }
  obtenerCedula() {}

  getUsuariosByCedula() {
    const infoUser = this.cedulas.forEach((cedula: any) => {
      if (this.cedula == cedula.cedula) {
        this.nombre = cedula.nombre;
        this.info.push({
          nombre: cedula.nombre,
          cedula: cedula.cedula.toString(),
        });

        /*   console.log(this.info); */
      }
    });
  }

  guardarDatosConsulta ()
  {
    this.userInArray = JSON.parse(localStorage.getItem('key')!) || [];
    this.userInArray.push(this.info);
    let transactionObjJson = JSON.stringify(this.info);
    this.local = localStorage.setItem('info', transactionObjJson);
  }
}
/*   guardarDatosConsulta() {
    this.userInArray = [];
    this.userInArray.push(this.info);
    let transactionObjJson = JSON.stringify(this.info);
    localStorage.setItem('info', transactionObjJson);
    console.log('key ' + transactionObjJson);
  }
}
 */
