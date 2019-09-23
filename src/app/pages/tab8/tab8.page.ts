import { Component } from '@angular/core';
import { Cultural_sexta } from 'src/app/interfaces/cultural_sexta';
import { Subscription } from 'rxjs';
import { CulturalSextaService } from 'src/app/services/cultural-sexta.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';


//teste
@Component({
  selector: 'app-8',
  templateUrl: 'tab8.page.html',
  styleUrls: ['tab8.page.scss'],
})

export class Tab8Page {
  private culturalsextas = new Array<Cultural_sexta>();
  private cultural_sextasSubscription: Subscription;
  private loading: any;
  textoBuscar = '';

  constructor(
    private oralsextasServices: CulturalSextaService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.cultural_sextasSubscription = this.oralsextasServices.getCulturalSextas().subscribe(data => { //carregar itens em tempo real      
      this.culturalsextas = data;
    });
  }

  ngOnInit() {

  }

  filterTab(event) {

    console.log(this.culturalsextas);
    const texto = event.target.value;
    this.textoBuscar = texto;

  }

  ngOnDestroy() { //destruindo sessão da página
    this.cultural_sextasSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteCulturalSexta(id: string) {
    try {
      await this.oralsextasServices.deleteCulturalSexta(id);

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








