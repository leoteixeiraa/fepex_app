import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Quarta } from '../interfaces/quarta';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuartaService {
  private quartasCollection: AngularFirestoreCollection<Quarta>; //armazenar referencia na coleção na loja

  constructor(private afs: AngularFirestore) {
    this.quartasCollection = this.afs.collection<Quarta>('Quartas');
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

  addQuarta(quarta: Quarta) {
    return this.quartasCollection.add(quarta);
  }

  getQuarta(id: string) { //pegar produto especifico pelo id
    return this.quartasCollection.doc<Quarta>(id).valueChanges();

  }

  updateQuarta(id: string, quarta: Quarta) {
    return this.quartasCollection.doc<Quarta>(id).update(quarta);

  }
  deleteQuarta(id: string) {
    return this.quartasCollection.doc(id).delete();
  }

}
