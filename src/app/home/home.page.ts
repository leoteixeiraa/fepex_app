import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private products = new Array<Product>();
  private productsSubscription: Subscription;

  constructor(
    private productsService: ProductService,
    private authService: AuthService
  ) {
    this.productsSubscription = this.productsService.getProducts().subscribe(data => { //carregar produtos em tempo real      
      this.products = data;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() { //destruindo sessão da página
    this.productsSubscription.unsubscribe();

  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }
}








