import { Component, OnInit } from '@angular/core';
import { Cultural_sexta } from 'src/app/interfaces/cultural_sexta';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CulturalSextaService } from 'src/app/services/cultural-sexta.service';

@Component({
  selector: 'app-details8',
  templateUrl: './details8.page.html',
  styleUrls: ['./details8.page.scss'],
})
export class Details8Page implements OnInit {
  private culturalsexta: Cultural_sexta = {};
  private loading: any;
  private culturalsextasId: string = null;
  private cultural_sextaSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private culturalsextaServices: CulturalSextaService,
    private navCtrl: NavController
  ) {
    this.culturalsextasId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.culturalsextasId) this.loadCulturalSexta();

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.cultural_sextaSubscription) this.cultural_sextaSubscription.unsubscribe();
  }

  loadCulturalSexta() {
    this.cultural_sextaSubscription = this.culturalsextaServices.getCulturalSexta(this.culturalsextasId).subscribe(data => {
      this.culturalsexta = data;
    });
  }

  async saveCulturalQuinta() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.culturalsexta.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.culturalsextasId) { //tentar atualizar o produto, se não ira criar o produto
      try {
        await this.culturalsextaServices.updateCulturalSexta(this.culturalsextasId, this.culturalsexta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab8');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
        console.error(error);

      }
    } else {
      this.culturalsexta.createdAt = new Date().getTime();

      try {
        await this.culturalsextaServices.addCulturalSexta(this.culturalsexta);
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
