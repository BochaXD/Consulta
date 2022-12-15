import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../servicios/basedatos.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Historial } from '../interfaces/usuarios';
import { QuerySnapshot } from 'firebase/firestore';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  public historial: Historial[] = [];
  public id: any = [];

  constructor(
    private af: AngularFirestore,
    private firestormService: FirestoreService
  ) {}

  ngOnInit() {
    this.firestormService.getHistorial().subscribe((prod: any[]) => {
      this.historial = prod;
      this.historial = prod.map((usuarioRef) => {
        let usuario = usuarioRef.payload.doc.data();
        usuario['id'] = usuarioRef.payload.doc.id;
        return usuario;
      });
    });
  }
  deleteHistorialId(id: string) {
    this.firestormService.deleteDatosHistorial(id);
  }
}
