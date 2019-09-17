import { Component, OnInit } from '@angular/core';
import { Quinta } from 'src/app/interfaces/quinta';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuintaService } from 'src/app/services/quinta.service';

@Component({
  selector: 'app-details2',
  templateUrl: './details2.page.html',
  styleUrls: ['./details2.page.scss'],
})
export class Details2Page implements OnInit {
  private quinta: Quinta = {};
  private loading: any;
  private quintaId: string = null;
  private quintaSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private quintaService: QuintaService,
    private navCtrl: NavController
  ) {
    this.quintaId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.quintaId) this.loadQuinta();

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.quintaSubscription) this.quintaSubscription.unsubscribe();
  }

  loadQuinta() {
    this.quintaSubscription = this.quintaService.getQuinta(this.quintaId).subscribe(data => {
      this.quinta = data;
    });
  }

  async saveQuinta() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.quinta.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.quintaId) { //tentar atualizar o produto, se não ira criar o produto
      try {
        await this.quintaService.updateQuinta(this.quintaId, this.quinta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab2');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
        console.error(error);

      }
    } else {
      this.quinta.createdAt = new Date().getTime();

      try {
        await this.quintaService.addQuinta(this.quinta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab2');
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
