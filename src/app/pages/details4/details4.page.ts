import { Component, OnInit } from '@angular/core';
import { Oral } from 'src/app/interfaces/oral';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OralQuartaService } from 'src/app/services/oral-quarta.service';

@Component({
  selector: 'app-details4',
  templateUrl: './details4.page.html',
  styleUrls: ['./details4.page.scss'],
})
export class Details4Page implements OnInit {
  private oralquarta: Oral = {};
  private loading: any;
  private oralquartasId: string = null;
  private oral_quartaSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private oralquartaServices: OralQuartaService,
    private navCtrl: NavController
  ) {
    this.oralquartasId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.oralquartasId) this.loadOralQuarta();

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.oral_quartaSubscription) this.oral_quartaSubscription.unsubscribe();
  }

  loadOralQuarta() {
    this.oral_quartaSubscription = this.oralquartaServices.getOralQuarta(this.oralquartasId).subscribe(data => {
      this.oralquarta = data;
    });
  }

  async saveSexta() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.oralquarta.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.oralquartasId) { //tentar atualizar o produto, se não ira criar o produto
      try {
        await this.oralquartaServices.updateOralQuarta(this.oralquartasId, this.oralquarta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab4');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
        console.error(error);

      }
    } else {
      this.oralquarta.createdAt = new Date().getTime();

      try {
        await this.oralquartaServices.addOralQuarta(this.oralquarta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab4');
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
