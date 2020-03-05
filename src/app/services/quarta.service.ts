import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DiaSemana } from '../interfaces/dia_semana';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuartaService {
  private quartasCollection: AngularFirestoreCollection<DiaSemana>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.quartasCollection = this.afs.collection<DiaSemana>('Quartas');
    ref => ref => ref.orderBy('time_start'); //realizando a consulta por orderBy
    Eg:
    this.quartasCollection = this.afs.collection('Quartas', ref => ref.orderBy('time_start')); //retornando dados em order crescente a partir do tempo

  }

  getQuartas() {
    return this.quartasCollection.snapshotChanges().pipe( //retornando produto do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addQuarta(quarta: DiaSemana) {
    return this.quartasCollection.add(quarta);
  }

  getQuarta(id: string) { //pegar produto especifico pelo id
    return this.quartasCollection.doc<DiaSemana>(id).valueChanges();

  }

  updateQuarta(id: string, quarta: DiaSemana) {
    return this.quartasCollection.doc<DiaSemana>(id).update(quarta);

  }
  deleteQuarta(id: string) {
    return this.quartasCollection.doc(id).delete();
  }

}
