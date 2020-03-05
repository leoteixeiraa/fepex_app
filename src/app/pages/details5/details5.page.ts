import { Component, OnInit } from '@angular/core';
import { Oral } from 'src/app/interfaces/oral';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OralSextaService } from 'src/app/services/oral-sexta.service';

@Component({
  selector: 'app-details5',
  templateUrl: './details5.page.html',
  styleUrls: ['./details5.page.scss'],
})
export class Details5Page implements OnInit {
  private oralsexta: Oral = {};
  private loading: any;
  private oralsextasId: string = null;
  private oral_sextaSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private oralsextaServices: OralSextaService,
    private navCtrl: NavController
  ) {
    this.oralsextasId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.oralsextasId) this.loadOralSexta();

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.oral_sextaSubscription) this.oral_sextaSubscription.unsubscribe();
  }

  loadOralSexta() {
    this.oral_sextaSubscription = this.oralsextaServices.getOralSexta(this.oralsextasId).subscribe(data => {
      this.oralsexta = data;
    });
  }

  async saveSexta() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.oralsexta.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.oralsextasId) { //tentar atualizar o produto, se não ira criar o produto
      try {
        await this.oralsextaServices.updateOralSexta(this.oralsextasId, this.oralsexta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab5');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
        console.error(error);

      }
    } else {
      this.oralsexta.createdAt = new Date().getTime();

      try {
        await this.oralsextaServices.addOralSexta(this.oralsexta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab5');
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
