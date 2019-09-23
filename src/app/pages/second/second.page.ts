import { Component } from '@angular/core';
import { Second } from 'src/app/interfaces/second';
import { Subscription } from 'rxjs';
import { SecondService } from 'src/app/services/second.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage {
  private seconds = new Array<Second>();
  private secondsSubscription: Subscription;
  private loading: any;
  textoBuscar = '';
  public user: any = {};
  private userSubscription: Subscription;

  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private secondsServices: SecondService,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.secondsSubscription = this.secondsServices.getSeconds().subscribe(data => { //carregar itens em tempo real      
      this.seconds = data;
    });
  }
  //
  ngOnInit() {

  }

  filterTab(event) {

    console.log(this.seconds);
    const texto = event.target.value;
    this.textoBuscar = texto;

  }

  ngOnDestroy() { //destruindo sessão da página
    if (this.userSubscription) this.userSubscription.unsubscribe();

    this.secondsSubscription.unsubscribe();

  }
  async login() {

    try {

      this.loadUser();
      console.log(this.loadUser);

    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  loadUser() {
    this.userSubscription = this.afs.collection('Users').doc(this.afa.auth.currentUser.uid).valueChanges().subscribe(data => {
      if (data) this.user = data;
    });
  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async deleteSecond(id: string) {
    try {
      await this.secondsServices.deleteSecond(id);

    } catch (error) {
      this.presentToast('Você não tem permissão para isso!');
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


