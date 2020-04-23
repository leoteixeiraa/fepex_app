import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuard] },
  { path: 'details/:id', loadChildren: './pages/details/details.module#DetailsPageModule', canActivate: [AuthGuard] },//tab1
  { path: 'details2/', loadChildren: './pages/details2/details2.module#Details2PageModule', canActivate: [AuthGuard] },
  { path: 'details2/:id', loadChildren: './pages/details2/details2.module#Details2PageModule', canActivate: [AuthGuard] },
  { path: 'details3/', loadChildren: './pages/details3/details3.module#Details3PageModule', canActivate: [AuthGuard] },
  { path: 'details3/:id', loadChildren: './pages/details3/details3.module#Details3PageModule', canActivate: [AuthGuard] },//tab3
  { path: 'details4/', loadChildren: './pages/details4/details4.module#Details4PageModule', canActivate: [AuthGuard] },//tab4
  { path: 'details4/:id', loadChildren: './pages/details4/details4.module#Details4PageModule', canActivate: [AuthGuard] },
  { path: 'details5/', loadChildren: './pages/details5/details5.module#Details5PageModule', canActivate: [AuthGuard] },//tab4
  { path: 'details5/:id', loadChildren: './pages/details5/details5.module#Details5PageModule', canActivate: [AuthGuard] },//tab5
  { path: 'details6/', loadChildren: './pages/details6/details6.module#Details6PageModule', canActivate: [AuthGuard] },//tab4
  { path: 'details6/:id', loadChildren: './pages/details6/details6.module#Details6PageModule', canActivate: [AuthGuard] },//tab5
  { path: 'details7/:id', loadChildren: './pages/details7/details7.module#Details7PageModule', canActivate: [AuthGuard] },//tab7
  { path: 'details8/:id', loadChildren: './pages/details8/details8.module#Details8PageModule', canActivate: [AuthGuard] },//tab8
  { path: 'details9/:id', loadChildren: './pages/details9/details9.module#Details9PageModule', canActivate: [AuthGuard] },//noticia
  { path: 'details-trab/', loadChildren: './pages/details-trab/details-trab.module#DetailsTrabPageModule', canActivate: [AuthGuard] },
  { path: 'details-trab/:id', loadChildren: './pages/details-trab/details-trab.module#DetailsTrabPageModule', canActivate: [AuthGuard] },
  { path: 'details-ofi/', loadChildren: './pages/details-ofi/details-ofi.module#DetailsOfiPageModule', canActivate: [AuthGuard] },//trabalhos
  { path: 'details-ofi/:id', loadChildren: './pages/details-ofi/details-ofi.module#DetailsOfiPageModule', canActivate: [AuthGuard] },//trabalhos
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule', canActivate: [AuthGuard] },
  { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule', canActivate: [AuthGuard] },
  { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule', canActivate: [AuthGuard] },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule', canActivate: [AuthGuard] },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule', canActivate: [AuthGuard] },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule', canActivate: [AuthGuard] },
  { path: 'oficinas', loadChildren: './pages/oficinas/oficinas.module#OficinasPageModule', canActivate: [AuthGuard] },
  { path: 'trabalhos', loadChildren: './pages/trabalhos/trabalhos.module#TrabalhosPageModule', canActivate: [AuthGuard] },
  { path: 'premiacao', loadChildren: './pages/premiacao/premiacao.module#PremiacaoPageModule', canActivate: [AuthGuard] },
  { path: 'culturais', loadChildren: './pages/culturais/culturais.module#CulturaisPageModule', canActivate: [AuthGuard] },
  { path: 'details-trab', loadChildren: './pages/details-trab/details-trab.module#DetailsTrabPageModule', canActivate: [AuthGuard] },
  { path: 'details-ofi', loadChildren: './pages/details-ofi/details-ofi.module#DetailsOfiPageModule', canActivate: [AuthGuard] },
  { path: 'first-with-tabs2', loadChildren: './pages/first-with-tabs2/first-with-tabs2.module#FirstWithTabs2PageModule', canActivate: [AuthGuard] },
  { path: 'tab4', loadChildren: './pages/tab4/tab4.module#Tab4PageModule', canActivate: [AuthGuard] },
  { path: 'tab5', loadChildren: './pages/tab5/tab5.module#Tab5PageModule', canActivate: [AuthGuard] },
  { path: 'tab6', loadChildren: './pages/tab6/tab6.module#Tab6PageModule', canActivate: [AuthGuard] },
  { path: 'details4', loadChildren: './pages/details4/details4.module#Details4PageModule', canActivate: [AuthGuard] },
  { path: 'details5', loadChildren: './pages/details5/details5.module#Details5PageModule', canActivate: [AuthGuard] },
  { path: 'first-with-tabs3', loadChildren: './pages/first-with-tabs3/first-with-tabs3.module#FirstWithTabs3PageModule', canActivate: [AuthGuard] },
  { path: 'tab7', loadChildren: './pages/tab7/tab7.module#Tab7PageModule', canActivate: [AuthGuard] },
  { path: 'details7', loadChildren: './pages/details7/details7.module#Details7PageModule', canActivate: [AuthGuard] },
  { path: 'tab8', loadChildren: './pages/tab8/tab8.module#Tab8PageModule', canActivate: [AuthGuard] },
  { path: 'details8', loadChildren: './pages/details8/details8.module#Details8PageModule', canActivate: [AuthGuard] },
  { path: 'details9', loadChildren: './pages/details9/details9.module#Details9PageModule', canActivate: [AuthGuard] },
  { path: 'sobre', loadChildren: './pages/sobre/sobre.module#SobrePageModule' },
  { path: 'trabalhos-anteriores', loadChildren: './pages/trabalhos-anteriores/trabalhos-anteriores.module#TrabalhosAnterioresPageModule' },
  { path: 'trabalhos-anteriores-result/:ano/:tipo/:categoria', loadChildren: './pages/trabalhos-anteriores-result/trabalhos-anteriores-result.module#TrabalhosAnterioresResultPageModule', canActivate: [AuthGuard] },
  { path: 'trabalhos-anteriores-result-detail/:id', loadChildren: './pages/trabalhos-anteriores-result-detail/trabalhos-anteriores-result-detail.module#TrabalhosAnterioresResultDetailPageModule', canActivate: [AuthGuard] },
  { path: 'fepex-anteriores', loadChildren: './pages/fepex-anteriores/fepex-anteriores.module#FepexAnterioresPageModule' },
  { path: 'primeira-fepex/:ano', loadChildren: './pages/primeira-fepex/primeira-fepex.module#PrimeiraFepexPageModule' },
  // { path: 'segunda-fepex', loadChildren: './pages/segunda-fepex/segunda-fepex.module#SegundaFepexPageModule' },
  // { path: 'terceira-fepex', loadChildren: './pages/terceira-fepex/terceira-fepex.module#TerceiraFepexPageModule' },
  // { path: 'quarta-fepex', loadChildren: './pages/quarta-fepex/quarta-fepex.module#QuartaFepexPageModule' },
  { path: 'primeira-fepex-artigos/:ano', loadChildren: './pages/primeira-fepex-artigos/primeira-fepex-artigos.module#PrimeiraFepexArtigosPageModule' },
  { path: 'primeira-fepex-resumos/:ano', loadChildren: './pages/primeira-fepex-resumos/primeira-fepex-resumos.module#PrimeiraFepexResumosPageModule' },  { path: 'filmes', loadChildren: './pages/filmes/filmes.module#FilmesPageModule' },

  // { path: 'segunda-fepex-resumos', loadChildren: './pages/segunda-fepex-resumos/segunda-fepex-resumos.module#SegundaFepexResumosPageModule' },
  // { path: 'segunda-fepex-artigos', loadChildren: './pages/segunda-fepex-artigos/segunda-fepex-artigos.module#SegundaFepexArtigosPageModule' },
  // { path: 'terceira-fepex-artigos', loadChildren: './pages/terceira-fepex-artigos/terceira-fepex-artigos.module#TerceiraFepexArtigosPageModule' },
  // { path: 'terceira-fepex-resumos', loadChildren: './pages/terceira-fepex-resumos/terceira-fepex-resumos.module#TerceiraFepexResumosPageModule' },
  // { path: 'quarta-fepex-resumos', loadChildren: './pages/quarta-fepex-resumos/quarta-fepex-resumos.module#QuartaFepexResumosPageModule' },
  // { path: 'quarta-fepex-artigos', loadChildren: './pages/quarta-fepex-artigos/quarta-fepex-artigos.module#QuartaFepexArtigosPageModule' },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
