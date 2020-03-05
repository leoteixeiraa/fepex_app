import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DiaSemana } from '../interfaces/dia_semana';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SextaService {
  private sextasCollection: AngularFirestoreCollection<DiaSemana>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.sextasCollection = this.afs.collection<DiaSemana>('Sextas');
    ref => ref => ref.orderBy('time_start'); //realizando a consulta por orderBy
    Eg:
    this.sextasCollection = this.afs.collection('Sextas', ref => ref.orderBy('time_start')); //retornando dados em order crescente a partir do tempo

  }

  getSextas() {
    return this.sextasCollection.snapshotChanges().pipe( //retornando item do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addSexta(sexta: DiaSemana) {
    return this.sextasCollection.add(sexta);
  }

  getSexta(id: string) { //pegar item especifico pelo id
    return this.sextasCollection.doc<DiaSemana>(id).valueChanges();

  }

  updateSexta(id: string, sexta: DiaSemana) {
    return this.sextasCollection.doc<DiaSemana>(id).update(sexta);

  }
  deleteSexta(id: string) {
    return this.sextasCollection.doc(id).delete();
  }

}
