import { Component } from '@angular/core';
import { Cedulas } from '../interfaces/usuarios.interface';
import { FirestoreService } from '../servicios/basedatos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public cedulas: Cedulas[] = [];
  public cedula = 0;

  constructor(private firestormService: FirestoreService) {}
  ngOnInit() {
    console.log('Inicio');
  }
  getUsuariosByCedula() {
    console.log(this.cedula);
    if (this.cedula) {
      const usuarioInfo = this.firestormService.getUsuariosByCedula(
        this.cedula
      );

      console.log(usuarioInfo);
    } else {
      console.log('Usuario no Encontrado');
    }
    });
  }
  guardarDatosConsulta() {
    let userInArray = [];
    userInArray.push(this.info);
    let transactionObjJson = JSON.stringify(this.info);
    localStorage.setItem('info', transactionObjJson);
    console.log('info ' + transactionObjJson);
  }
}
