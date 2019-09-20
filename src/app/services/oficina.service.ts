import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Oficina } from '../interfaces/oficina';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OficinaService {
  private oficinasCollection: AngularFirestoreCollection<Oficina>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.oficinasCollection = this.afs.collection<Oficina>('Oficinas');
    ref => ref => ref.orderBy('category'); //realizando a consulta por orderBy
    Eg:
    this.oficinasCollection = this.afs.collection('Oficinas', ref => ref.orderBy('status')); //retornando dados em order crescente a partir do tempo

  }

  getOficinas() {
    return this.oficinasCollection.snapshotChanges().pipe( //retornando item do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addOficina(oficina: Oficina) {
    return this.oficinasCollection.add(oficina);
  }

  getOficina(id: string) { //pegar item especifico pelo id
    return this.oficinasCollection.doc<Oficina>(id).valueChanges();

  }

  updateOficina(id: string, oficina: Oficina) {
    return this.oficinasCollection.doc<Oficina>(id).update(oficina);

  }
  deleteOficina(id: string) {
    return this.oficinasCollection.doc(id).delete();
  }

}
