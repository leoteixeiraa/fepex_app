import { Component, OnInit } from '@angular/core';
import { Cultural } from 'src/app/interfaces/cultural';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CulturalQuartaService } from 'src/app/services/cultural-quarta.service';

@Component({
  selector: 'app-details6',
  templateUrl: './details6.page.html',
  styleUrls: ['./details6.page.scss'],
})
export class Details6Page implements OnInit {
  private culturalquarta: Cultural = {};
  private loading: any;
  private culturalquartasId: string = null;
  private cultural_quartaSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private culturalquartaServices: CulturalQuartaService,
    private navCtrl: NavController
  ) {
    this.culturalquartasId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.culturalquartasId) this.loadCulturalQuarta();

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.cultural_quartaSubscription) this.cultural_quartaSubscription.unsubscribe();
  }

  loadCulturalQuarta() {
    this.cultural_quartaSubscription = this.culturalquartaServices.getCulturalQuarta(this.culturalquartasId).subscribe(data => {
      this.culturalquarta = data;
    });
  }

  async saveCulturalQuarta() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.culturalquarta.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.culturalquartasId) { //tentar atualizar o produto, se não ira criar o produto
      try {
        await this.culturalquartaServices.updateCulturalQuarta(this.culturalquartasId, this.culturalquarta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab6');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
        console.error(error);

      }
    } else {
      this.culturalquarta.createdAt = new Date().getTime();

      try {
        await this.culturalquartaServices.addCulturalQuarta(this.culturalquarta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab6');
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
