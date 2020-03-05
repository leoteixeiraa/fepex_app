import { Component } from '@angular/core';
import { DiaSemana } from 'src/app/interfaces/dia_semana';
import { Subscription } from 'rxjs';
import { QuintaService } from 'src/app/services/quinta.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
//teste
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})

export class Tab2Page {
  private quintas = new Array<DiaSemana>();
  private quintasSubscription: Subscription;
  private loading: any;

  constructor(
    private quintasService: QuintaService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.quintasSubscription = this.quintasService.getQuintas().subscribe(data => { //carregar itens em tempo real      
      this.quintas = data;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() { //destruindo sessão da página
    this.quintasSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteQuinta(id: string) {
    try {
      await this.quintasService.deleteQuinta(id);

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








