import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Cultural } from '../interfaces/cultural';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CulturalQuintaService {
  private cultural_quintasCollection: AngularFirestoreCollection<Cultural>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.cultural_quintasCollection = this.afs.collection<Cultural>('CulturalQuintas');
    ref => ref => ref.orderBy('order'); //realizando a consulta por orderBy
    Eg:
    this.cultural_quintasCollection = this.afs.collection('CulturalQuintas', ref => ref.orderBy('order')); //retornando dados em order crescente a partir do tempo

  }

  getCulturalQuintas() {
    return this.cultural_quintasCollection.snapshotChanges().pipe( //retornando item do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addCulturalQuinta(cultural_quinta: Cultural) {
    return this.cultural_quintasCollection.add(cultural_quinta);
  }

  getCulturalQuinta(id: string) { //pegar item especifico pelo id
    return this.cultural_quintasCollection.doc<Cultural>(id).valueChanges();

  }

  updateCulturalQuinta(id: string, cultural_quinta: Cultural) {
    return this.cultural_quintasCollection.doc<Cultural>(id).update(cultural_quinta);

  }
  deleteCulturalQuinta(id: string) {
    return this.cultural_quintasCollection.doc(id).delete();
  }

}
