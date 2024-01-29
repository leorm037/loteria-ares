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
import { SairComponent } from './page/sair/sair.component';
import { EntrarComponent } from './page/entrar/entrar.component';
import { InscrevaSeComponent } from './page/inscreva-se/inscreva-se.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';


export const routes: Routes = [
  { path: '', redirectTo: '/pagina-inicial', pathMatch: 'full' },
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'concurso', component: ConcursoComponent },
  { path: 'bolao', component: BolaoComponent },
  { path: 'bolao/alterar', component: BolaoAlterarComponent },
  { path: 'bolao/novo', component: BolaoNovoComponent },
  { path: 'bolao/:id/apostador', component: BolaoApostadorComponent, pathMatch: 'full' },
  { path: 'bolao/apostador/novo', component: BolaoApostadorNovoComponent },
  { path: 'bolao/apostador/alterar', component: BolaoApostadorAlterarComponent },
  { path: 'loteria', component: LoteriaComponent },
  { path: 'sair', component: SairComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'inscreva-se', component: InscrevaSeComponent },
  { path: '**', component: PageNotFoundComponent }
];
