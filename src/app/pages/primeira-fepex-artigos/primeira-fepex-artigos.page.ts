import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-primeira-fepex-artigos',
  templateUrl: './primeira-fepex-artigos.page.html',
  styleUrls: ['./primeira-fepex-artigos.page.scss'],
})
export class PrimeiraFepexArtigosPage implements OnInit {
  private ano: String = null;

  constructor(private activeRoute: ActivatedRoute) {
    this.ano = this.activeRoute.snapshot.params['ano'];
  }

  ngOnInit() {
  }

}
