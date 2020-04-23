import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-primeira-fepex-resumos',
  templateUrl: './primeira-fepex-resumos.page.html',
  styleUrls: ['./primeira-fepex-resumos.page.scss'],
})
export class PrimeiraFepexResumosPage implements OnInit {
  private ano: String = null;

  constructor(private activeRoute: ActivatedRoute) {
    this.ano = this.activeRoute.snapshot.params['ano'];
  }

  ngOnInit() {
  }

}
