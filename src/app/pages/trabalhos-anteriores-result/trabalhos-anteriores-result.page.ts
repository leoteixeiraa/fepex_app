import { Component, OnInit } from "@angular/core";
import { TrabalhoAnterior } from "src/app/interfaces/trabalho_anterior";
import { TrabalhosAnterioresService } from "src/app/services/trabalhos-anteriores.service";
import { AuthService } from "src/app/services/auth.service";
import { LoadingController, ToastController } from "@ionic/angular";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-trabalhos-anteriores-result",
  templateUrl: "./trabalhos-anteriores-result.page.html",
  styleUrls: ["./trabalhos-anteriores-result.page.scss"],
})
export class TrabalhosAnterioresResultPage implements OnInit {
  private trabalhos;
  private subsctiption: Subscription;

  textoBuscar: string = ""; //Filtro

  // Parâmetros recebidos
  private ano: number; // 2016 - 2019
  private categoria: string; // Ensino, Pesquisa ou Extensão
  private tipo: string; // ARTIGO ou RESUMO

  constructor(
    private service: TrabalhosAnterioresService,
    private authService: AuthService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private activeRoute: ActivatedRoute
  ) {
    this.ano = this.activeRoute.snapshot.params["ano"];
    this.categoria = this.activeRoute.snapshot.params["categoria"];
    this.tipo = this.activeRoute.snapshot.params["tipo"];
  }

  ngOnInit() {
    this.subsctiption = this.service
      .getTrabalhos(this.ano, this.categoria, this.tipo)
      .subscribe((data) => {
        this.trabalhos = data;
      });
  }

  filterTab(event) {
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

  ngOnDestroy() {
    //destruindo sessão da página
    console.log("saindo da tela trabalhos result");
    this.subsctiption.unsubscribe();
  }
}
