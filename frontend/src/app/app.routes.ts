import { Routes } from '@angular/router';
import { BolaoComponent } from './pages/bolao/bolao.component';
import { ConcursoComponent } from './pages/concurso/concurso.component';
import { LoteriaComponent } from './pages/loteria/loteria.component';
import { BolaoCadastrarComponent } from './pages/bolao/bolao-cadastrar/bolao-cadastrar.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bolao'
    },
    {
        path: 'loteria',
        component: LoteriaComponent
    },
    {
        path: 'concurso',
        component: ConcursoComponent
    },
    {
        path: 'bolao',
        component: BolaoComponent
    },
    {
        path: 'bolao/novo',
        component: BolaoCadastrarComponent
    }
];
