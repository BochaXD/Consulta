import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { DatosInfo } from '../interfaces/usuarios';
@Injectable({ providedIn: 'root' })
export class FirestoreService {
  public infos: any = [];
  usuariosInfo: DatosInfo = new DatosInfo();
  constructor(private af: AngularFirestore) {}

  getDatos() {
    return this.af.collection('cedulas').valueChanges();
  }
  getUser() {
    return this.af.collection('usuarios').valueChanges();
  }
  getHistorial() {
    return this.af.collection('historial').snapshotChanges();
  }
  getUsuariosByNombre(nombre: string) {
    return this.af
      .collection('cedulas')
      .ref.where('nombre', '==', nombre)
      .get()
      .then((querySnapshot) => {
        let usuarios: any = [];
        querySnapshot.forEach((doc) => {
          usuarios.push(doc.data());
        });
        return usuarios;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  }

  getUsuariosByCedula(cedula: string) {
    return this.af
      .collection('cedulas')
      .ref.where('cedula', '==', cedula)
      .get()
      .then((querySnapshot) => {
        let usuarios: any = [];
        querySnapshot.forEach((doc) => {
          usuarios.push(doc.data());
        });
        return usuarios;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  }
  deleteDatosHistorial(id: string) {
    return this.af.collection('historial').doc(id).delete();
  }
}
