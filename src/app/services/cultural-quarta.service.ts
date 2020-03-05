import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Cultural } from '../interfaces/cultural';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CulturalQuartaService {
  private cultural_quartasCollection: AngularFirestoreCollection<Cultural>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.cultural_quartasCollection = this.afs.collection<Cultural>('CulturalQuartas');
    ref => ref => ref.orderBy('order'); //realizando a consulta por orderBy
    Eg:
    this.cultural_quartasCollection = this.afs.collection('CulturalQuartas', ref => ref.orderBy('order')); //retornando dados em order crescente a partir do tempo

  }

  getCulturalQuartas() {
    return this.cultural_quartasCollection.snapshotChanges().pipe( //retornando item do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addCulturalQuarta(cultural_quarta: Cultural) {
    return this.cultural_quartasCollection.add(cultural_quarta);
  }

  getCulturalQuarta(id: string) { //pegar item especifico pelo id
    return this.cultural_quartasCollection.doc<Cultural>(id).valueChanges();

  }

  updateCulturalQuarta(id: string, cultural_quarta: Cultural) {
    return this.cultural_quartasCollection.doc<Cultural>(id).update(cultural_quarta);

  }
  deleteCulturalQuarta(id: string) {
    return this.cultural_quartasCollection.doc(id).delete();
  }

}
