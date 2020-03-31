import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/interfaces/equipe';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  // private equipe: Equipe = {};
  private lista: Array<Equipe> = [];

  constructor() {
    this.lista.push({id: '1', nome: 'Fabricio Bizotto', funcao: 'Professor Colaborador', avatar: '/assets/img/fabricio.gif', lattes: ''})
    this.lista.push({id: '2', nome: 'Gabriella Aparecida Ronchi', funcao: 'Aluna Colaboradora', avatar: '/assets/img/fabricio.gif', lattes: ''})
    this.lista.push({id: '3', nome: 'Fabricio', funcao: 'Professor Colaborador', avatar: '/assets/img/fabricio.gif', lattes: ''})
    this.lista.push({id: '4', nome: 'Fabricio', funcao: 'Professor Colaborador', avatar: '/assets/img/fabricio.gif', lattes: ''})
    this.lista.push({id: '5', nome: 'Fabricio', funcao: 'Professor Colaborador', avatar: '/assets/img/fabricio.gif', lattes: ''})
    this.lista.push({id: '6', nome: 'Fabricio', funcao: 'Professor Colaborador', avatar: '/assets/img/fabricio.gif', lattes: ''})
   }

  // chama este método ao carregar a tela
  ngOnInit() {
    

    // console.log(this.lista)
  }

}
