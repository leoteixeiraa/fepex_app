import { Component } from '@angular/core';
import { Oficina } from 'src/app/interfaces/oficina';
import { Subscription } from 'rxjs';
import { OficinaService } from 'src/app/services/oficina.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.page.html',
  styleUrls: ['./oficinas.page.scss'],
})
export class OficinasPage {
  private oficinas = new Array<Oficina>();
  private oficinasSubscription: Subscription;
  private loading: any;
  textoBuscar = '';

  constructor(
    private oficinasServices: OficinaService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.oficinasSubscription = this.oficinasServices.getOficinas().subscribe(data => { //carregar itens em tempo real      
      this.oficinas = data;
    });
  }

  ngOnInit() {

  }

  filterTab(event) {

    console.log(this.oficinas);
    const texto = event.target.value;
    this.textoBuscar = texto;

  }

  ngOnDestroy() { //destruindo sessão da página
    this.oficinasSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteOficina(id: string) {
    try {
      await this.oficinasServices.deleteOficina(id);

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


