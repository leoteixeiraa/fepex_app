import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-primeira-fepex',
  templateUrl: './primeira-fepex.page.html',
  styleUrls: ['./primeira-fepex.page.scss'],
})
export class PrimeiraFepexPage implements OnInit {
  private ano: String = null;
  private artigos_url: String = null;

  constructor(private activeRoute: ActivatedRoute) {
    this.ano = this.activeRoute.snapshot.params['ano'];
  }

  ngOnInit() {
  }

}
