import { Component, OnInit } from '@angular/core';
import { Oficina } from 'src/app/interfaces/oficina';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OficinaService } from 'src/app/services/oficina.service';


@Component({
  selector: 'app-details-ofi',
  templateUrl: './details-ofi.page.html',
  styleUrls: ['./details-ofi.page.scss'],
})
export class DetailsOfiPage implements OnInit {
  private oficina: Oficina = {};
  private loading: any;
  private oficinaId: string = null;
  private oficinaSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private oficinaService: OficinaService,
    private navCtrl: NavController
  ) {
    this.oficinaId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.oficinaId) this.loadOficina();

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.oficinaSubscription) this.oficinaSubscription.unsubscribe();
  }

  loadOficina() {
    this.oficinaSubscription = this.oficinaService.getOficina(this.oficinaId).subscribe(data => {
      this.oficina = data;
    });
  }

  async saveOficina() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.oficina.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.oficinaId) { //tentar atualizar o produto, se não ira criar o produto
      try {
        await this.oficinaService.updateOficina(this.oficinaId, this.oficina);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/oficinas');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
        console.error(error);

      }
    } else {
      this.oficina.createdAt = new Date().getTime();

      try {
        await this.oficinaService.addOficina(this.oficina);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/oficinas');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
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
