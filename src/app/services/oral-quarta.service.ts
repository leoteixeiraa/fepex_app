import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Oral_quarta } from '../interfaces/oral_quarta';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OralQuartaService {
  private oral_quartasCollection: AngularFirestoreCollection<Oral_quarta>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.oral_quartasCollection = this.afs.collection<Oral_quarta>('OralQuartas');
    ref => ref => ref.orderBy('time_start'); //realizando a consulta por orderBy
    Eg:
    this.oral_quartasCollection = this.afs.collection('OralQuartas', ref => ref.orderBy('time_start')); //retornando dados em order crescente a partir do tempo

  }

  getOralQuartas() {
    return this.oral_quartasCollection.snapshotChanges().pipe( //retornando item do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addOralQuarta(oral_quarta: Oral_quarta) {
    return this.oral_quartasCollection.add(oral_quarta);
  }

  getOralQuarta(id: string) { //pegar item especifico pelo id
    return this.oral_quartasCollection.doc<Oral_quarta>(id).valueChanges();

  }

  updateOralQuarta(id: string, oral_quarta: Oral_quarta) {
    return this.oral_quartasCollection.doc<Oral_quarta>(id).update(oral_quarta);

  }
  deleteOralQuarta(id: string) {
    return this.oral_quartasCollection.doc(id).delete();
  }

}
