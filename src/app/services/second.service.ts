import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Second } from '../interfaces/second';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecondService {
  private secondsCollection: AngularFirestoreCollection<Second>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.secondsCollection = this.afs.collection<Second>('Seconds');

  }

  getSeconds() {
    return this.secondsCollection.snapshotChanges().pipe( //retornando item do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addSecond(second: Second) {
    return this.secondsCollection.add(second);
  }

  getSecond(id: string) { //pegar item especifico pelo id
    return this.secondsCollection.doc<Second>(id).valueChanges();

  }

  updateSecond(id: string, second: Second) {
    return this.secondsCollection.doc<Second>(id).update(second);

  }
  deleteSecond(id: string) {
    return this.secondsCollection.doc(id).delete();
  }

}
