import { Component } from '@angular/core';
import { Oral_sexta } from 'src/app/interfaces/oral_sexta';
import { Subscription } from 'rxjs';
import { OralSextaService } from 'src/app/services/oral-sexta.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';


//teste
@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})

export class Tab5Page {
  private oralsextas = new Array<Oral_sexta>();
  private oral_sextasSubscription: Subscription;
  private loading: any;
  textoBuscar = '';

  constructor(
    private oralsextasServices: OralSextaService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.oral_sextasSubscription = this.oralsextasServices.getOralSextas().subscribe(data => { //carregar itens em tempo real      
      this.oralsextas = data;
    });
  }

  ngOnInit() {

  }

  filterTab(event) {

    console.log(this.oralsextas);
    const texto = event.target.value;
    this.textoBuscar = texto;

  }

  ngOnDestroy() { //destruindo sessão da página
    this.oral_sextasSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteOralSexta(id: string) {
    try {
      await this.oralsextasServices.deleteOralSexta(id);

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








