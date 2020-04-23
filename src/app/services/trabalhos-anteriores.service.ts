import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from "@angular/fire/firestore";
import { TrabalhoAnterior } from "../interfaces/trabalho_anterior";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TrabalhosAnterioresService {
  private trabalhosCollection: AngularFirestoreCollection<TrabalhoAnterior>;
  // private afs: AngularFirestore;

  constructor(private afs: AngularFirestore) {
    this.trabalhosCollection = this.afs.collection<TrabalhoAnterior>(
      "Trabalhos2016",
      (ref) => ref.orderBy("titulo")
    );
  }

  getTrabalhos(ano: number, tipo: string, categoria: string) {

    this.trabalhosCollection = this.afs.collection<TrabalhoAnterior>(
      "Trabalhos2016",
      (ref) =>
        ref
          .where("categoria", "==", categoria)
          .where("tipo", "==", tipo)
          // .orderBy("titulo")
    );

    return this.trabalhosCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  getTrabalho(id: string) {
    //pegar item especifico pelo id
    return this.trabalhosCollection.doc<TrabalhoAnterior>(id).valueChanges();
  }
}
