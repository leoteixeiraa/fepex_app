import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Oral } from '../interfaces/oral';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OralSextaService {
  private oral_sextasCollection: AngularFirestoreCollection<Oral>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.oral_sextasCollection = this.afs.collection<Oral>('OralSextas');
    ref => ref => ref.orderBy('time_start'); //realizando a consulta por orderBy
    Eg:
    this.oral_sextasCollection = this.afs.collection('OralSextas', ref => ref.orderBy('time_start')); //retornando dados em order crescente a partir do tempo

  }

  getOralSextas() {
    return this.oral_sextasCollection.snapshotChanges().pipe( //retornando item do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addOralSexta(oral_sexta: Oral) {
    return this.oral_sextasCollection.add(oral_sexta);
  }

  getOralSexta(id: string) { //pegar item especifico pelo id
    return this.oral_sextasCollection.doc<Oral>(id).valueChanges();

  }

  updateOralSexta(id: string, oral_sexta: Oral) {
    return this.oral_sextasCollection.doc<Oral>(id).update(oral_sexta);

  }
  deleteOralSexta(id: string) {
    return this.oral_sextasCollection.doc(id).delete();
  }

}
