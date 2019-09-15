import { Component } from '@angular/core';
import { Quarta } from 'src/app/interfaces/quarta';
import { Subscription } from 'rxjs';
import { QuartaService } from 'src/app/services/quarta.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
//teste
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})

export class Tab1Page {
  private quartas = new Array<Quarta>();
  private quartasSubscription: Subscription;
  private loading: any;

  constructor(
    private quartasService: QuartaService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.quartasSubscription = this.quartasService.getQuartas().subscribe(data => { //carregar produtos em tempo real      
      this.quartas = data;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() { //destruindo sessão da página
    this.quartasSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteQuarta(id: string) {
    try {
      await this.quartasService.deleteQuarta(id);

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








