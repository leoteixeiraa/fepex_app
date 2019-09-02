import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  //verificação de usúario logado
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => { //detectar mudanças do usuario . Usuario logado, apagado, mudado.
        if (user) this.router.navigate(['home']); //usuario não logado, volta pra pag de login

        resolve(!user ? true : false);
      })
    })
  }

}
