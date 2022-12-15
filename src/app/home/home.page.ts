import { Component, OnInit } from '@angular/core';
import { info } from 'console';
import { DatosInfo, Info } from '../interfaces/usuarios';
import { FirestoreService } from '../servicios/basedatos.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public cedulas: DatosInfo[] = [];
  public ced = '';
  public nombre = '';
  public info: any = [];
  public userInArray: any = [];
  public local: any = [];
  /*  public transactionObjJson: any = []; */
  constructor(
    private firestormService: FirestoreService,
    private af: AngularFirestore
  ) {}
  ngOnInit() {
    /*    console.log('Inicio'); */
    this.firestormService.getDatos().subscribe((prod: any[]) => {
      this.cedulas = prod;
      /*   console.log(this.cedulas); */
    });
    this.local = JSON.parse(localStorage.getItem('user')!) || [];
  }
  getCedula() {
    console.log(this.nombre);
    this.firestormService
      .getUsuariosByCedula(this.ced)
      .then((usuarios) => {
        this.info = usuarios;
      })
      .catch((error) => {
        // maneja el error en caso de que ocurra
        console.error(error);
      });
  }

  getUsuarios() {
    this.firestormService
      .getUsuariosByNombre(this.nombre)
      .then((usuario) => {
        this.info = usuario;
      })
      .catch((error) => {
        // maneja el error en caso de que ocurra
        console.error(error);
      });
  }
  submitForm() {
    if (this.ced == '') {
      this.getUsuarios();
    }
    if (this.nombre == '') {
      this.getCedula();
    }
  }
  guardarDatosConsulta() {

    this.userInArray = [];
    this.userInArray.push(this.info);
    const transactionObjJson = this.info;
    const collectionRef = this.af.collection('historial');
    transactionObjJson.forEach((item: any) => {
      collectionRef.add({ ...item, consultador: this.local.userName });
    });
  }
}
/*
 */
