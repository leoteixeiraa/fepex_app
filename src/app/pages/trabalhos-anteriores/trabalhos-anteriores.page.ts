import { Component, OnInit } from "@angular/core";
import { TrabalhoAnterior } from "src/app/interfaces/trabalho_anterior";
import { TrabalhosAnterioresService } from "src/app/services/trabalhos-anteriores.service";
import { AuthService } from "src/app/services/auth.service";
import {
  LoadingController,
  ToastController,
  NavController,
  NavParams,
} from "@ionic/angular";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-trabalhos-anteriores",
  templateUrl: "./trabalhos-anteriores.page.html",
  styleUrls: ["./trabalhos-anteriores.page.scss"],
})
export class TrabalhosAnterioresPage implements OnInit {
  private trabalhos = new Array<TrabalhoAnterior>();
  private subsctiption: Subscription;

  private titulo: string; // Título dinâmico da tela
  // Parâmetros da Tela
  private ano: number;
  private categoria: string;
  private tipo: string;

  constructor(
    private service: TrabalhosAnterioresService,
    private authService: AuthService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private activeRoute: ActivatedRoute,
    private navigation: NavController
  ) {
    this.ano = this.activeRoute.snapshot.params["ano"];
    this.categoria = this.activeRoute.snapshot.params["categoria"];
    this.tipo = this.activeRoute.snapshot.params["tipo"];
    this.titulo = this.criarTituloDaTela();
  }

  ngOnInit() {
    // this.subsctiption = this.service.getTrabalhos().subscribe(data =>{
    //   this.trabalhos = data;
    // })
  }

  irParaTrabalhosAno(ano: number) {
    this.navigation.navigateForward(`/trabalhos-anteriores/${ano}`);
  }

  irParaTrabalhosAnoCategoria(categoria: string) {
    this.navigation.navigateForward(
      `/trabalhos-anteriores/${this.ano}/${categoria}`
    );
  }

  irParaTrabalhosResultado(tipo: string) {
    this.navigation.navigateForward(
      `/trabalhos-anteriores-result/${this.ano}/${this.categoria}/${tipo}`
    );
  }

  private criarTituloDaTela() {
    if (this.ano && this.categoria) {
      return "FEPEX " + this.ano + " - " + this.categoria;
    } else if (this.ano) {
      return "FEPEX " + this.ano;
    } else {
      return "FEPEX Anteriores";
    }
  }
}
