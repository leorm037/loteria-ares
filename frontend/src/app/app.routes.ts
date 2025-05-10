import { Routes } from '@angular/router';
import { BolaoComponent } from './pages/bolao/bolao.component';
import { ConcursoComponent } from './pages/concurso/concurso.component';
import { LoteriaComponent } from './pages/loteria/loteria.component';
import { BolaoCadastrarComponent } from './pages/bolao/bolao-cadastrar/bolao-cadastrar.component';
import { LoteriaCadastrarComponent } from './pages/loteria/loteria-cadastrar/loteria-cadastrar.component';
import { PaginaNaoEncontradaComponent } from './pages/error/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { BolaoAlterarComponent } from './pages/bolao/bolao-alterar/bolao-alterar.component';
import { LoteriaAlterarComponent } from './pages/loteria/loteria-alterar/loteria-alterar.component';
import { EntrarComponent } from './features/entrar/entrar.component';
import { InscricaoComponent } from './pages/inscreva-se/inscricao.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { autenticacaoGuard } from './core/guards/autenticacao.guard';
import { adminGuard } from './core/guards/admin.guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout/auth-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { 
                path: 'entrar', 
                loadComponent: () => import('').then(m => m)
            },
            {
                path: 'recuperar-senha'
            },
            {
                path: 'inscreva-se',
            }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bolao'
    },
    {
        path: 'loteria',
        component: LoteriaComponent,
        canActivate: [autenticacaoGuard, adminGuard],
        title: 'Loteria',
        data: {
            description: 'Consulta de Loterias'
        }
    },
    {
        path: 'loteria/novo',
        component: LoteriaCadastrarComponent,
        canActivate: [autenticacaoGuard, adminGuard],
        title: 'Nova Loteria',
        data: {
            description: 'Cadastro de Loteria'
        }
    },
    {
        path: 'loteria/alterar/:uuid',
        component: LoteriaAlterarComponent,
        canActivate: [autenticacaoGuard, adminGuard],
        title: 'Alterar Loteria',
        data: {
            description: 'Alterar Loteria'
        }
    },
    {
        path: 'concurso',
        component: ConcursoComponent,
        canActivate: [autenticacaoGuard],
        title: 'Concurso',
        data: {
            description: 'Consultar Concurso'
        }
    },
    {
        path: 'bolao',
        component: BolaoComponent,
        canActivate: [autenticacaoGuard],
        title: 'Bolão',
        data: {
            description: 'Bolão'
        }
    },
    {
        path: 'bolao/novo',
        component: BolaoCadastrarComponent,
        canActivate: [autenticacaoGuard],
        title: 'Novo Bolão',
        data: {
            description: 'Cadastro de Bolão',
        }
    },
    {
        path: 'bolao/alterar/:uuid',
        component: BolaoAlterarComponent,
        canActivate: [autenticacaoGuard],
        title: 'Alterar bolão',
        data: {            
            description: 'Alterar Bolão'
        }
    },
    {
        path: 'inscricao',
        component: InscricaoComponent,
        title: 'Inscreva-se',
        data: {
            description: 'Cadastro de novo usuário'
        }
    },
    {
        path: 'entrar',
        component: EntrarComponent,
        title: 'Entrar',
        data: {
            description: 'Autenticação'
        }
    },
    {
        path: 'recuperar-senha',
        component: RecuperarSenhaComponent,
        title: 'Recuperar senha',
        data: {
            description: 'Recuperar senha'
        }
    },
    {
        path: 'pagina-nao-encontrada',
        component: PaginaNaoEncontradaComponent,
        title: 'Página não encontrada',
        data: {
            description: 'Error 404 - Página não encontrada'
        }
    },
    {
        path: '**',
        component: PaginaNaoEncontradaComponent,
        title: 'Página não encontrada',
        data: {
            description: 'Error 404 - Página não encontrada'
        }
    }
];
