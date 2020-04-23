import { Component, OnInit } from "@angular/core";
import { TrabalhoAnterior } from "src/app/interfaces/trabalho_anterior";
import { TrabalhosAnterioresService } from "src/app/services/trabalhos-anteriores.service";
import { AuthService } from "src/app/services/auth.service";
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-trabalhos-anteriores",
  templateUrl: "./trabalhos-anteriores.page.html",
  styleUrls: ["./trabalhos-anteriores.page.scss"],
})
export class TrabalhosAnterioresPage implements OnInit {
  private trabalhos = new Array<TrabalhoAnterior>();
  private subsctiption: Subscription
  private loading: any;
  constructor(
    private service: TrabalhosAnterioresService,
    private authService: AuthService,
    private loadingController:LoadingController,
    private toastController:ToastController
  ) {
    this.subsctiption = this.service.getTrabalhos(2016, 'Ensino', 'ARTIGO').subscribe(data =>{
      this.trabalhos = data;
    })
  }

  ngOnInit() {
  }
}
