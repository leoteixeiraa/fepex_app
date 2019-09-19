import { Component } from '@angular/core';
import { Trabalho } from 'src/app/interfaces/trabalho';
import { Subscription } from 'rxjs';
import { TrabalhoService } from 'src/app/services/trabalho.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.page.html',
  styleUrls: ['./trabalhos.page.scss'],
})
export class TrabalhosPage {
  private trabalhos = new Array<Trabalho>();
  private trabalhosSubscription: Subscription;
  private loading: any;
  textoBuscar = '';

  constructor(
    private trabalhosServices: TrabalhoService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.trabalhosSubscription = this.trabalhosServices.getTrabalhos().subscribe(data => { //carregar itens em tempo real      
      this.trabalhos = data;
    });
  }

  ngOnInit() {

  }

  filterTab(event) {

    console.log(this.trabalhos);
    const texto = event.target.value;
    this.textoBuscar = texto;

  }

  ngOnDestroy() { //destruindo sessão da página
    this.trabalhosSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteTrabalho(id: string) {
    try {
      await this.trabalhosServices.deleteTrabalho(id);

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


