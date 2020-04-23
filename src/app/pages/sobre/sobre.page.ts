import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/interfaces/equipe';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  // private equipe: Equipe = {};
  private listaDeIntegrantes: Array<Equipe> = [];

  constructor() {
    this.listaDeIntegrantes.push({id: '1', nome: 'Fabricio Bizotto', funcao: 'Professor Colaborador', avatar: '/assets/img/fabricio.gif', lattes: 'http://lattes.cnpq.br/9756008111074656'})
    this.listaDeIntegrantes.push({id: '2', nome: 'Gabriella Aparecida Ronchi', funcao: 'Aluna Colaboradora', avatar: '/assets/img/gabriella.jpg', lattes: 'http://lattes.cnpq.br/5375511986094830'})
    this.listaDeIntegrantes.push({id: '3', nome: 'Gilberto Speggiorin de Oliveira', funcao: 'Professor Orientador', avatar: '/assets/img/gilberto.gif', lattes: 'http://lattes.cnpq.br/4212040147084342'})
    this.listaDeIntegrantes.push({id: '4', nome: 'Leonardo Venâncio Teixeira', funcao: 'Aluno Colaborador', avatar: '/assets/img/leonardo.gif', lattes: 'http://lattes.cnpq.br/0437092313796879'})
    this.listaDeIntegrantes.push({id: '5', nome: 'Marcelo Volpatto Marques', funcao: 'Servidor Colaborador', avatar: '/assets/img/marcelo.gif', lattes: 'http://lattes.cnpq.br/4988804994731301'})
    this.listaDeIntegrantes.push({id: '6', nome: 'Paulo Luciano Cizeski de Lorenzi', funcao: 'Aluno Bolsista', avatar: '/assets/img/paulo.gif', lattes: 'http://lattes.cnpq.br/2903296032375816'});
    this.listaDeIntegrantes.push({id: '7', nome: 'Walter Antonio Teixeira da Silva', funcao: 'Aluno Bolsista', avatar: '/assets/img/walter.gif', lattes: 'http://lattes.cnpq.br/4962487497758543'});
    
   }

  // chama este método ao carregar a tela
  ngOnInit() {
    

    // console.log(this.lista)
  }

}
