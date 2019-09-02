import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx'
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  public wavesPosition: number = 0;
  public wavesDifference: number = 85;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(public keyboard: Keyboard,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService) { }

  ngOnInit() {
    this.keyboard.isVisible
  }

  segmentChanged(event: any) {
    if (event.detail.value == "login") {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;

    }
  }
  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister);
    } catch (error) {
      let message: string;

      switch (error.code) {
        case 'auth/email-already-in-use':
          message = "E-mail está sendo usado, por favor tente outro e-mail";
          break;

        case 'auth/invalid-email':
          message = "E-mail inválido";
          break;

        case 'auth/invalid-password':
          message = "A senha precisa ter pelo menos 6 caracteres";
          break;

      }

      this.presentToast(message),
        this.presentToast(error.message); //apagar essa linha para mensagem personalizada 

    } finally {
      this.loading.dismiss();
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