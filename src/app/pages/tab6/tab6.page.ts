import { Component } from '@angular/core';
import { Cultural_quarta } from 'src/app/interfaces/cultural_quarta';
import { Subscription } from 'rxjs';
import { CulturalQuartaService } from 'src/app/services/cultural-quarta.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';


//teste
@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss'],
})

export class Tab6Page {
  private culturalquartas = new Array<Cultural_quarta>();
  private cultural_quartasSubscription: Subscription;
  private loading: any;
  textoBuscar = '';

  constructor(
    private oralquartasServices: CulturalQuartaService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.cultural_quartasSubscription = this.oralquartasServices.getCulturalQuartas().subscribe(data => { //carregar itens em tempo real      
      this.culturalquartas = data;
    });
  }

  ngOnInit() {

  }

  filterTab(event) {

    console.log(this.culturalquartas);
    const texto = event.target.value;
    this.textoBuscar = texto;

  }

  ngOnDestroy() { //destruindo sessão da página
    this.cultural_quartasSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteCulturalQuarta(id: string) {
    try {
      await this.oralquartasServices.deleteCulturalQuarta(id);

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








