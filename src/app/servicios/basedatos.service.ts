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
  usuariosInfo: DatosInfo = new DatosInfo();
  constructor(private af: AngularFirestore) {}

  getDatos() {
    return this.af.collection('cedulas').valueChanges();
  }
  getUsuariosByCedula(cedula: any) {
    return this.af
      .collection('cedulas', (ref) => ref.where(cedula, '==', cedula))
      .valueChanges();
  }

  /*   getCollectionParameters<tipo>(path: string, parametro: string, value: string) {
    const dataCollection: AngularFirestoreCollection<tipo> =
      this.angularFirestore.collection<tipo>( path, ref => ref.where( parametro, '==', value ) );
    return dataCollection.valueChanges();
  } */
  /*   getDocument<tipo>(enlace: string): Observable<any> {
    const itemDoc: AngularFirestoreDocument<tipo> =
      this.FireStore.doc<tipo>(enlace);
    return itemDoc.valueChanges()
  }

  getCollection<tipo> ( path: string ): Observable<tipo[]>
  {
    const ref = this.FireStore.collection<tipo>( path );
    return ref.valueChanges();
  }
  getDocument<tipo> ( enlace: string )
  {
    const itemDoc: AngularFirestoreDocument<tipo> = this.angularFirestore.doc<tipo>( enlace );
    return itemDoc.valueChanges()
  }*/
}
