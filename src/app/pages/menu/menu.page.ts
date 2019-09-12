import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';

  pages = [
    {
      icon: 'md-calendar',
      title: 'Programação Evento',
      url: '/menu/first'
    },
    {
      icon: 'md-paper',
      title: 'Noticias',
      url: '/menu/second'
    },
    {
      icon: 'md-document',
      title: 'Trabalhos',
      url: '/menu/trabalhos'
    },
    {
      icon: 'md-map',
      title: 'Mapa',
      url: '/menu/mapa'
    }
  ];

  constructor(private authService: AuthService,
    private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {

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