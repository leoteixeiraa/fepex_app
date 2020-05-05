import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Trabalho } from "../interfaces/trabalho";
import { map } from "rxjs/operators";
import { TrabalhoAnterior } from "../interfaces/trabalho_anterior";

@Injectable({
  providedIn: "root",
})
export class TrabalhoService {
  private trabalhosCollection: AngularFirestoreCollection<Trabalho>; //armazenar referencia da coleção
  // private trabalhos2019Collection: AngularFirestoreCollection<Trabalho>; //armazenar referencia da coleção

  constructor(private afs: AngularFirestore) {
    this.trabalhosCollection = this.afs.collection<Trabalho>("Trabalhos");
    (ref) => (ref) => ref.orderBy("category"); //realizando a consulta por orderBy
    Eg: this.trabalhosCollection = this.afs.collection("Trabalhos", (ref) =>
      ref.orderBy("category")
    ); //retornando dados em order crescente a partir do tempo

    // this.trabalhos2019Collection = this.afs.collection<TrabalhoAnterior>("Trabalhos2019");
    // this.copiarTrabalhosParaTrabalhos2019();
  }

  getTrabalhos() {
    return this.trabalhosCollection.snapshotChanges().pipe(
      //retornando item do banco pelo ID
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });
      })
    );
  }

  addTrabalho(trabalho: Trabalho) {
    return this.trabalhosCollection.add(trabalho);
  }

  getTrabalho(id: string) {
    //pegar item especifico pelo id
    return this.trabalhosCollection.doc<Trabalho>(id).valueChanges();
  }

  updateTrabalho(id: string, trabalho: Trabalho) {
    return this.trabalhosCollection.doc<Trabalho>(id).update(trabalho);
  }
  deleteTrabalho(id: string) {
    return this.trabalhosCollection.doc(id).delete();
  }

  // getTrabalhos2019() {
  //   return this.trabalhos2019Collection.snapshotChanges().pipe(
  //     //retornando item do banco pelo ID
  //     map((actions) => {
  //       return actions.map((a) => {
  //         const data = a.payload.doc.data();
  //         const id = a.payload.doc.id; //payload -> pegar dados especicos do id

  //         return { id, ...data };
  //       });
  //     })
  //   );
  // }

  // copiarTrabalhosParaTrabalhos2019() {
  //   this.getTrabalhos().subscribe((data) => {
  //     console.log(data.length);

  //     data.forEach((doc: Trabalho) => {
  //       var obj: TrabalhoAnterior = new Object();

  //       // obj.id = doc.id;
  //       obj.autores = doc.authors;
  //       obj.categoria = doc.category;
  //       obj.orientadores = doc.advisors;
  //       obj.resumo = doc.description;
  //       obj.titulo = doc.title;
  //       obj.link = "";
  //       obj.tipo = "Artigo";

  //       console.log(obj);

  //       this.trabalhos2019Collection.add(obj);
  //     });
  //   });
  // }
}
