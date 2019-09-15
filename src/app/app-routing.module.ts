import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuard] },
  { path: 'details/:id', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuard] },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule', canActivate: [AuthGuard] },
  { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule', canActivate: [AuthGuard] },
  { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule', canActivate: [AuthGuard] },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule', canActivate: [AuthGuard] },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule', canActivate: [AuthGuard] },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule', canActivate: [AuthGuard] },
  { path: 'mapa', loadChildren: './pages/mapa/mapa.module#MapaPageModule', canActivate: [AuthGuard] },
  { path: 'oficinas', loadChildren: './pages/oficinas/oficinas.module#OficinasPageModule', canActivate: [AuthGuard] },
  { path: 'trabalhos', loadChildren: './pages/trabalhos/trabalhos.module#TrabalhosPageModule', canActivate: [AuthGuard] },
  { path: 'premiacao', loadChildren: './pages/premiacao/premiacao.module#PremiacaoPageModule', canActivate: [AuthGuard] },
  { path: 'culturais', loadChildren: './pages/culturais/culturais.module#CulturaisPageModule', canActivate: [AuthGuard] },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
