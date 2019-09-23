import { Component } from '@angular/core';
import { Second } from 'src/app/interfaces/second';
import { Subscription } from 'rxjs';
import { SecondService } from 'src/app/services/second.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage {
  private seconds = new Array<Second>();
  private secondsSubscription: Subscription;
  private loading: any;
  textoBuscar = '';

  constructor(
    private secondsServices: SecondService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.secondsSubscription = this.secondsServices.getSeconds().subscribe(data => { //carregar itens em tempo real      
      this.seconds = data;
    });
  }
  //
  ngOnInit() {

  }

  filterTab(event) {

    console.log(this.seconds);
    const texto = event.target.value;
    this.textoBuscar = texto;

  }

  ngOnDestroy() { //destruindo sessão da página
    this.secondsSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteSecond(id: string) {
    try {
      await this.secondsServices.deleteSecond(id);

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


