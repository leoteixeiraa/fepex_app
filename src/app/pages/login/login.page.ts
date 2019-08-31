import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides, {static:false}) slides: IonSlides;
  public wavesPosition: number = 0;
  public wavesDifference: number = 85;

  constructor(public keyboard: Keyboard) { }

  ngOnInit() {
    this.keyboard.isVisible
   }

  segmentChanged(event: any){
    if (event.detail.value == "login") {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    }else{
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
      
    }
    }
    
  }


