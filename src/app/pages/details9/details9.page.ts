import { Component, OnInit } from '@angular/core';
import { Second } from 'src/app/interfaces/second';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SecondService } from 'src/app/services/second.service';

@Component({
  selector: 'app-details9',
  templateUrl: './details9.page.html',
  styleUrls: ['./details9.page.scss'],
})
export class Details9Page implements OnInit {
  private second: Second = {};
  private loading: any;
  private secondsId: string = null;
  private secondSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private secondServices: SecondService,
    private navCtrl: NavController
  ) {
    this.secondsId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.secondsId) this.loadSecond();

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.secondSubscription) this.secondSubscription.unsubscribe();
  }

  loadSecond() {
    this.secondSubscription = this.secondServices.getSecond(this.secondsId).subscribe(data => {
      this.second = data;
    });
  }

  async saveSecond() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.second.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.secondsId) { //tentar atualizar o produto, se não ira criar o produto
      try {
        await this.secondServices.updateSecond(this.secondsId, this.second);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/second');
      } catch (error) {
        this.presentToast('Você não tem permissão para isso! Procure a Coodernação de Pesquisa do Campus');
        this.loading.dismiss();
        console.error(error);

      }
    } else {
      this.second.createdAt = new Date().getTime();

      try {
        await this.secondServices.addSecond(this.second);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/second');
      } catch (error) {
        this.presentToast('Você não tem permissão para isso! Procure a Coodernação de Pesquisa do Campus');
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
