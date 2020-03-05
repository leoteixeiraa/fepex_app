import { Component, OnInit } from '@angular/core';
import { DiaSemana } from 'src/app/interfaces/dia_semana';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SextaService } from 'src/app/services/sexta.service';

@Component({
  selector: 'app-details3',
  templateUrl: './details3.page.html',
  styleUrls: ['./details3.page.scss'],
})
export class Details3Page implements OnInit {
  private sexta: DiaSemana = {};
  private loading: any;
  private sextaId: string = null;
  private sextaSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private sextaService: SextaService,
    private navCtrl: NavController
  ) {
    this.sextaId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.sextaId) this.loadSexta();

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.sextaSubscription) this.sextaSubscription.unsubscribe();
  }

  loadSexta() {
    this.sextaSubscription = this.sextaService.getSexta(this.sextaId).subscribe(data => {
      this.sexta = data;
    });
  }

  async saveSexta() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.sexta.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.sextaId) { //tentar atualizar o produto, se não ira criar o produto
      try {
        await this.sextaService.updateSexta(this.sextaId, this.sexta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab3');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
        console.error(error);

      }
    } else {
      this.sexta.createdAt = new Date().getTime();

      try {
        await this.sextaService.addSexta(this.sexta);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tab3');
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
