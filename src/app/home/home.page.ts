import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private products = new Array<Product>();
  private productsSubscription: Subscription;
  private loading: any;

  constructor(
    private productsService: ProductService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.productsSubscription = this.productsService.getProducts().subscribe(data => { //carregar produtos em tempo real      
      this.products = data;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() { //destruindo sessão da página
    this.productsSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteProduct(id: string) {
    try {
      await this.productsService.deleteProduct(id);

    } catch (error) {
      this.presentToast('Erro ao tentar apagar');
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();

  }

}








