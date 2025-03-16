import { Routes } from '@angular/router';
import { BolaoComponent } from './pages/bolao/bolao.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bolao'
    },
    {
        path: 'bolao',
        component: BolaoComponent
    }
];
