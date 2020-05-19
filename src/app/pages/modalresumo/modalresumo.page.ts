import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalresumo',
  templateUrl: './modalresumo.page.html',
  styleUrls: ['./modalresumo.page.scss'],
})
export class ModalresumoPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  
close(){
  this.modalCtrl.dismiss();
}
}
