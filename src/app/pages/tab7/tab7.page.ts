import { Component } from '@angular/core';
import { Cultural_quinta } from 'src/app/interfaces/cultural_quinta';
import { Subscription } from 'rxjs';
import { CulturalQuintaService } from 'src/app/services/cultural-quinta.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';


//teste
@Component({
  selector: 'app-7',
  templateUrl: 'tab7.page.html',
  styleUrls: ['tab7.page.scss'],
})

export class Tab7Page {
  private culturalquintas = new Array<Cultural_quinta>();
  private cultural_quintasSubscription: Subscription;
  private loading: any;
  textoBuscar = '';

  constructor(
    private oralquintasServices: CulturalQuintaService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.cultural_quintasSubscription = this.oralquintasServices.getCulturalQuintas().subscribe(data => { //carregar itens em tempo real      
      this.culturalquintas = data;
    });
  }

  ngOnInit() {

  }

  filterTab(event) {

    console.log(this.culturalquintas);
    const texto = event.target.value;
    this.textoBuscar = texto;

  }

  ngOnDestroy() { //destruindo sessão da página
    this.cultural_quintasSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteCulturalQuinta(id: string) {
    try {
      await this.oralquintasServices.deleteCulturalQuinta(id);

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








