import { Component, OnInit } from "@angular/core";
import { Trabalho } from "src/app/interfaces/trabalho";
import {
  LoadingController,
  ToastController,
  ModalController,
} from "@ionic/angular";
import { NavController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { TrabalhoService } from "src/app/services/trabalho.service";
import { TrabalhosAnterioresService } from "src/app/services/trabalhos-anteriores.service";
import { ModalresumoPage } from "../modalresumo/modalresumo.page";

@Component({
  selector: "app-trabalhos-anteriores-result-detail",
  templateUrl: "./trabalhos-anteriores-result-detail.page.html",
  styleUrls: ["./trabalhos-anteriores-result-detail.page.scss"],
})
export class TrabalhosAnterioresResultDetailPage implements OnInit {
  trabalho: Trabalho = {};
  private loading: any;
  private trabalhoId: string = null;
  private trabalhoSubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private trabalhoService: TrabalhosAnterioresService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {
    this.trabalhoId = this.activeRoute.snapshot.params["id"];
    //se o id estiver no parametro

    if (this.trabalhoId) this.loadTrabalho();
  }

  ngOnInit() {}

  loadTrabalho() {
    this.trabalhoSubscription = this.trabalhoService
      .getTrabalho(this.trabalhoId)
      .subscribe((data) => {
        this.trabalho = data;
      });
  }

  async showModalResumo() {
    const modal = await this.modalCtrl.create({
      component: ModalresumoPage,
      componentProps: {
        trabalho: this.trabalho,
      },
    });

    modal.present();
  }
}
