import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../interfaces/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCollection: AngularFirestoreCollection<Product>; //armazenar referencia na coleção na loja

  constructor(private afs: AngularFirestore) {
    this.productsCollection = this.afs.collection<Product>('Products');
  }

  getProducts() {
    return this.productsCollection.snapshotChanges().pipe( //retornando produto do banco pelo ID
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //payload -> pegar dados especicos do id

          return { id, ...data };
        });

      })
    )
  }

  addProduct(product: Product) {
    return this.productsCollection.add(product);
  }

  getProduct(id: string) { //pegar produto especifico pelo id
    return this.productsCollection.doc<Product>(id).valueChanges();

  }

  updateProduct(id: string, product: Product) {
    return this.productsCollection.doc<Product>(id).update(product);

  }

  deleteProduct(id: string) {
    return this.productsCollection.doc(id).delete();
  }
}
