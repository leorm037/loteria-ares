import { Bolao } from './interface/bolao.internface';
import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './page/pagina-inicial/pagina-inicial.component';
import { ConcursoComponent } from './page/concurso/concurso.component';
import { BolaoComponent } from './page/bolao/bolao.component';
import { BolaoNovoComponent } from './page/bolao/bolao-novo/bolao-novo.component';
import { BolaoAlterarComponent } from './page/bolao/bolao-alterar/bolao-alterar.component';
import { BolaoApostadorComponent } from './page/bolao/bolao-apostador/bolao-apostador.component';
import { BolaoApostadorNovoComponent } from './page/bolao/bolao-apostador/bolao-apostador-novo/bolao-apostador-novo.component';
import { BolaoApostadorAlterarComponent } from './page/bolao/bolao-apostador/bolao-apostador-alterar/bolao-apostador-alterar.component';
import { LoteriaComponent } from './page/loteria/loteria.component';
import { EntrarComponent } from './page/entrar/entrar.component';
import { InscrevaSeComponent } from './page/inscreva-se/inscreva-se.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/pagina-inicial',
    pathMatch: 'full'
  },
  {
    path: 'pagina-inicial',
    component: PaginaInicialComponent
  },
  {
    path: 'concurso',
    component: ConcursoComponent,
    canActivate: [authGuard] },
  {
    path: 'bolao',
    component: BolaoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'bolao/alterar',
    component: BolaoAlterarComponent,
    canActivate: [authGuard],
  },
  {
    path: 'bolao/novo',
    component: BolaoNovoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'bolao/:id/apostador',
    component: BolaoApostadorComponent,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: 'bolao/apostador/novo',
    component: BolaoApostadorNovoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'bolao/apostador/alterar',
    component: BolaoApostadorAlterarComponent,
    canActivate: [authGuard],
  },
  {
    path: 'loteria',
    component: LoteriaComponent,
    canActivate: [authGuard]
  },
  {
    path: 'entrar',
    component: EntrarComponent
  },
  {
    path: 'inscreva-se',
    component: InscrevaSeComponent
   },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
