import { Component } from '@angular/core';
import { DiaSemana } from 'src/app/interfaces/dia_semana';
import { Subscription } from 'rxjs';
import { SextaService } from 'src/app/services/sexta.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';


//teste
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})

export class Tab3Page {
  private sextas = new Array<DiaSemana>();
  private sextasSubscription: Subscription;
  private loading: any;
  textoBuscar = '';

  constructor(
    private sextasServices: SextaService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.sextasSubscription = this.sextasServices.getSextas().subscribe(data => { //carregar itens em tempo real      
      this.sextas = data;
    });
  }

  ngOnInit() {

  }

  filterTab(event) {

    console.log(this.sextas);
    const texto = event.target.value;
    this.textoBuscar = texto;

  }

  ngOnDestroy() { //destruindo sessão da página
    this.sextasSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteSexta(id: string) {
    try {
      await this.sextasServices.deleteSexta(id);

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








