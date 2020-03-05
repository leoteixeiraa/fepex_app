import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DiaSemana } from '../interfaces/dia_semana';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuintaService {
  private quintasCollection: AngularFirestoreCollection<DiaSemana>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.quintasCollection = this.afs.collection<DiaSemana>('Quintas');
    ref => ref => ref.orderBy('time_start'); //realizando a consulta por orderBy
    Eg:
    this.quintasCollection = this.afs.collection('Quintas', ref => ref.orderBy('time_start')); //retornando dados em order crescente a partir do tempo

  }

  getQuintas() {
    return this.quintasCollection.snapshotChanges().pipe( //retornando item do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addQuinta(quinta: DiaSemana) {
    return this.quintasCollection.add(quinta);
  }

  getQuinta(id: string) { //pegar item especifico pelo id
    return this.quintasCollection.doc<DiaSemana>(id).valueChanges();

  }

  updateQuinta(id: string, quinta: DiaSemana) {
    return this.quintasCollection.doc<DiaSemana>(id).update(quinta);

  }
  deleteQuinta(id: string) {
    return this.quintasCollection.doc(id).delete();
  }

}
