import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestore,
  CollectionReference,
} from "@angular/fire/firestore";
import { TrabalhoAnterior } from "../interfaces/trabalho_anterior";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

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

  getTrabalhos(ano: number, categoria: string, tipo: string) {
    this.trabalhosCollection = this.afs.collection<TrabalhoAnterior>(
      "Trabalhos" + ano,
      (ref) => ref.where("categoria", "==", categoria).where("tipo", "==", tipo)
    );

    // this.ref = this.afs.collection<TrabalhoAnterior>("Trabalhos2016").ref;
    // this.ref.where("categoria", "==", "Ensino").where("tipo", "==", "ARTIGO").onSnapshot(function (x) {
    //   console.log(x.docs);
    // });

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
