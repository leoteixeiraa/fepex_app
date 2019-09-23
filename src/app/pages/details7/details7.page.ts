import { Component, OnInit } from '@angular/core';
import { Cultural_quinta } from 'src/app/interfaces/cultural_quinta';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CulturalQuintaService } from 'src/app/services/cultural-quinta.service';

@Component({
  selector: 'app-details7',
  templateUrl: './details7.page.html',
  styleUrls: ['./details7.page.scss'],
})
export class Details7Page implements OnInit {
  private culturalquinta: Cultural_quinta = {};
  private loading: any;
  private culturalquintasId: string = null;
  private cultural_quintaSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private culturalquintaServices: CulturalQuintaService,
    private navCtrl: NavController
  ) {
    this.culturalquintasId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.culturalquintasId) this.loadCulturalQuinta();

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.cultural_quintaSubscription) this.cultural_quintaSubscription.unsubscribe();
  }

  loadCulturalQuinta() {
    this.cultural_quintaSubscription = this.culturalquintaServices.getCulturalQuinta(this.culturalquintasId).subscribe(data => {
      this.culturalquinta = data;
    });
  }

  async saveCulturalQuinta() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.culturalquinta.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.culturalquintasId) { //tentar atualizar o produto, se não ira criar o produto
      try {
        await this.culturalquintaServices.updateCulturalQuinta(this.culturalquintasId, this.culturalquinta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab7');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
        console.error(error);

      }
    } else {
      this.culturalquinta.createdAt = new Date().getTime();

      try {
        await this.culturalquintaServices.addCulturalQuinta(this.culturalquinta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab7');
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
