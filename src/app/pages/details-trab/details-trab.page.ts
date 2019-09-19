import { Component, OnInit } from '@angular/core';
import { Trabalho } from 'src/app/interfaces/trabalho';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TrabalhoService } from 'src/app/services/trabalho.service';


@Component({
  selector: 'app-details-trab',
  templateUrl: './details-trab.page.html',
  styleUrls: ['./details-trab.page.scss'],
})
export class DetailsTrabPage implements OnInit {
  private trabalho: Trabalho = {};
  private loading: any;
  private trabalhoId: string = null;
  private trabalhoSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private trabalhoService: TrabalhoService,
    private navCtrl: NavController
  ) {
    this.trabalhoId = this.activeRoute.snapshot.params['id'];
    //se o id estiver no parametro

    if (this.trabalhoId) this.loadTrabalho();

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.trabalhoSubscription) this.trabalhoSubscription.unsubscribe();
  }

  loadTrabalho() {
    this.trabalhoSubscription = this.trabalhoService.getTrabalho(this.trabalhoId).subscribe(data => {
      this.trabalho = data;
    });
  }

  async saveTrabalho() {
    await this.presentLoading(); //componente carregando mostrado para o usuario 

    this.trabalho.userId = this.authService.getAuth().currentUser.uid; //pegar id do usuario para validação

    if (this.trabalhoId) { //tentar atualizar o produto, se não ira criar o produto
      try {
        await this.trabalhoService.updateTrabalho(this.trabalhoId, this.trabalho);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/trabalhos');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
        console.error(error);

      }
    } else {
      this.trabalho.createdAt = new Date().getTime();

      try {
        await this.trabalhoService.addTrabalho(this.trabalho);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/trabalhos');
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
