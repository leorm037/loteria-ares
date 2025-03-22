import { Routes } from '@angular/router';
import { BolaoComponent } from './pages/bolao/bolao.component';
import { ConcursoComponent } from './pages/concurso/concurso.component';
import { LoteriaComponent } from './pages/loteria/loteria.component';
import { BolaoCadastrarComponent } from './pages/bolao/bolao-cadastrar/bolao-cadastrar.component';
import { LoteriaCadastrarComponent } from './pages/loteria/loteria-cadastrar/loteria-cadastrar.component';
import { PaginaNaoEncontradaComponent } from './pages/error/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { BolaoAlterarComponent } from './pages/bolao/bolao-alterar/bolao-alterar.component';
import { LoteriaAlterarComponent } from './pages/loteria/loteria-alterar/loteria-alterar.component';
import { AutenticacaoComponent } from './pages/autenticacao/autenticacao.component';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bolao'
    },
    {
        path: 'loteria',
        component: LoteriaComponent,
        title: 'Loteria'
    },
    {
        path: 'loteria/novo',
        component: LoteriaCadastrarComponent,
        title: 'Nova loteria'
    },
    {
        path: 'loteria/alterar/:uuid',
        component: LoteriaAlterarComponent,
        title: 'Alterar loteria'
    },
    {
        path: 'concurso',
        component: ConcursoComponent,
        title: 'Concurso'
    },
    {
        path: 'bolao',
        component: BolaoComponent,
        title: 'Bolão'
    },
    {
        path: 'bolao/novo',
        component: BolaoCadastrarComponent,
        title: 'Novo bolão'
    },
    {
        path: 'bolao/alterar/:uuid',
        component: BolaoAlterarComponent,
        title: 'Novo bolão'
    },
    {
        path: 'autenticacao',
        component: AutenticacaoComponent,
        title: 'Autenticação'
    },
    {
        path: 'inscricao',
        component: InscricaoComponent,
        title: 'Inscrição'
    },
    {
        path: '**',
        component: PaginaNaoEncontradaComponent,
        title: 'Página não encontrada'
    }
];
