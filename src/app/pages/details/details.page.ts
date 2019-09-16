import { Component, OnInit } from '@angular/core';
import { Quarta } from 'src/app/interfaces/quarta';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuartaService } from 'src/app/services/quarta.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private quarta: Quarta = {};
  private loading: any;
  private quartaId: string = null;
  private quartaSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private quartaService: QuartaService,
    private navCtrl: NavController
  ) {
    this.quartaId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.quartaId) this.loadQuarta();

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.quartaSubscription) this.quartaSubscription.unsubscribe();
  }

  loadQuarta() {
    this.quartaSubscription = this.quartaService.getQuarta(this.quartaId).subscribe(data => {
      this.quarta = data;
    });
  }

  async saveQuarta() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.quarta.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.quartaId) { //tentar atualizar o produto, se não ira criar o produto
      try {
        await this.quartaService.updateQuarta(this.quartaId, this.quarta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab1');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
        console.error(error);

      }
    } else {
      this.quarta.createdAt = new Date().getTime();

      try {
        await this.quartaService.addQuarta(this.quarta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab1');
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
