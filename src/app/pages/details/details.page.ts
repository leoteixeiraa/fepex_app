import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private product: Product = {};
  private loading: any;
  private productId: string = null;
  private productSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private navCtrl: NavController
  ) {
    this.productId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.productId) this.loadProduct();

  }

  ngOnInit() { }

  loadProduct() {
    this.productSubscription = this.productService.getProduct(this.productId).subscribe(data => {
      this.product = data;
    });
  }

  async saveProduct() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.product.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.productId) { //tentar atualizar o produto, se não ira criar o produto

    } else {
      this.product.createdAt = new Date().getTime();
    } try {
      await this.productService.addProduct(this.product);
      await this.loading.dismiss();



    } catch (error) {
      this.presentToast('Erro ao tentar salvar');
      this.loading.dismiss();

      this.navCtrl.navigateBack('/home');
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
