import { Component } from '@angular/core';
import { Oral } from 'src/app/interfaces/oral';
import { Subscription } from 'rxjs';
import { OralQuartaService } from 'src/app/services/oral-quarta.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';


//teste
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})

export class Tab4Page {
  private oralquartas = new Array<Oral>();
  private oral_quartasSubscription: Subscription;
  private loading: any;
  textoBuscar = '';

  constructor(
    private oralquartasServices: OralQuartaService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.oral_quartasSubscription = this.oralquartasServices.getOralQuartas().subscribe(data => { //carregar itens em tempo real      
      this.oralquartas = data;
    });
  }

  ngOnInit() {

  }

  filterTab(event) {

    console.log(this.oralquartas);
    const texto = event.target.value;
    this.textoBuscar = texto;

  }

  ngOnDestroy() { //destruindo sessão da página
    this.oral_quartasSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteOralQuarta(id: string) {
    try {
      await this.oralquartasServices.deleteOralQuarta(id);

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








