import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Trabalho } from '../interfaces/trabalho';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrabalhoService {
  private trabalhosCollection: AngularFirestoreCollection<Trabalho>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.trabalhosCollection = this.afs.collection<Trabalho>('Trabalhos');
    ref => ref => ref.orderBy('category'); //realizando a consulta por orderBy
    Eg:
    this.trabalhosCollection = this.afs.collection('Trabalhos', ref => ref.orderBy('category')); //retornando dados em order crescente a partir do tempo

  }

  getTrabalhos() {
    return this.trabalhosCollection.snapshotChanges().pipe( //retornando item do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addTrabalho(trabalho: Trabalho) {
    return this.trabalhosCollection.add(trabalho);
  }

  getTrabalho(id: string) { //pegar item especifico pelo id
    return this.trabalhosCollection.doc<Trabalho>(id).valueChanges();

  }

  updateTrabalho(id: string, trabalho: Trabalho) {
    return this.trabalhosCollection.doc<Trabalho>(id).update(trabalho);

  }
  deleteTrabalho(id: string) {
    return this.trabalhosCollection.doc(id).delete();
  }

}
