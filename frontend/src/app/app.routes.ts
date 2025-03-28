import { Routes } from '@angular/router';
import { BolaoComponent } from './pages/bolao/bolao.component';
import { ConcursoComponent } from './pages/concurso/concurso.component';
import { LoteriaComponent } from './pages/loteria/loteria.component';
import { BolaoCadastrarComponent } from './pages/bolao/bolao-cadastrar/bolao-cadastrar.component';
import { LoteriaCadastrarComponent } from './pages/loteria/loteria-cadastrar/loteria-cadastrar.component';
import { PaginaNaoEncontradaComponent } from './pages/error/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { BolaoAlterarComponent } from './pages/bolao/bolao-alterar/bolao-alterar.component';
import { LoteriaAlterarComponent } from './pages/loteria/loteria-alterar/loteria-alterar.component';
import { EntrarComponent } from './pages/entrar/entrar.component';
import { InscricaoComponent } from './pages/inscreva-se/inscricao.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bolao'
    },
    {
        path: 'loteria',
        component: LoteriaComponent,
        title: 'Loteria',
        data: {
            description: 'Consulta de Loterias',
        }
    },
    {
        path: 'loteria/novo',
        component: LoteriaCadastrarComponent,
        title: 'Nova Loteria',
        data: {
            description: 'Cadastro de Loteria',
        }
    },
    {
        path: 'loteria/alterar/:uuid',
        component: LoteriaAlterarComponent,
        title: 'Alterar Loteria',
        data: {
            description: 'Alterar Loteria',
        }
    },
    {
        path: 'concurso',
        component: ConcursoComponent,
        title: 'Concurso',
        data: {
            description: 'Consultar Concurso',
        }
    },
    {
        path: 'bolao',
        component: BolaoComponent,
        title: 'Bolão',
        data: {
            description: 'Bolão',
        }
    },
    {
        path: 'bolao/novo',
        component: BolaoCadastrarComponent,
        title: 'Novo Bolão',
        data: {
            description: 'Cadastro de Bolão',
        }
    },
    {
        path: 'bolao/alterar/:uuid',
        component: BolaoAlterarComponent,
        title: 'Alterar bolão',
        data: {            
            description: 'Alterar Bolão',
        }
    },
    {
        path: 'inscricao',
        component: InscricaoComponent,
        title: 'Inscreva-se',
        data: {
            description: 'Cadastro de novo usuário',
        }
    },
    {
        path: 'entrar',
        component: EntrarComponent,
        title: 'Entrar',
        data: {
            description: 'Autenticação',
        }
    },
    {
        path: 'recuperar-senha',
        component: RecuperarSenhaComponent,
        title: 'Recuperar senha',
        data: {
            description: 'Recuperar senha',
        }
    },
    {
        path: '**',
        component: PaginaNaoEncontradaComponent,
        title: 'Página não encontrada',
        data: {
            description: 'Error 404 - Página não encontrada',
        }
    }
];
