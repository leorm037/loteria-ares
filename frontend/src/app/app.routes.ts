import { Routes } from '@angular/router';
import { BolaoComponent } from './paginas/bolao/bolao.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'bolao',
        pathMatch: 'full'
    },
    {
        path: 'bolao',
        component: BolaoComponent
    }
];
