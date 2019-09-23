import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Cultural_sexta } from '../interfaces/cultural_sexta';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CulturalSextaService {
  private cultural_sextasCollection: AngularFirestoreCollection<Cultural_sexta>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.cultural_sextasCollection = this.afs.collection<Cultural_sexta>('CulturalSextas');
    ref => ref => ref.orderBy('order'); //realizando a consulta por orderBy
    Eg:
    this.cultural_sextasCollection = this.afs.collection('CulturalSextas', ref => ref.orderBy('order')); //retornando dados em order crescente a partir do tempo

  }

  getCulturalSextas() {
    return this.cultural_sextasCollection.snapshotChanges().pipe( //retornando item do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addCulturalSexta(cultural_sexta: Cultural_sexta) {
    return this.cultural_sextasCollection.add(cultural_sexta);
  }

  getCulturalSexta(id: string) { //pegar item especifico pelo id
    return this.cultural_sextasCollection.doc<Cultural_sexta>(id).valueChanges();

  }

  updateCulturalSexta(id: string, cultural_sexta: Cultural_sexta) {
    return this.cultural_sextasCollection.doc<Cultural_sexta>(id).update(cultural_sexta);

  }
  deleteCulturalSexta(id: string) {
    return this.cultural_sextasCollection.doc(id).delete();
  }

}
