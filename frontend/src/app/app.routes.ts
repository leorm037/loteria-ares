import { Routes } from '@angular/router';
import { LayoutAuthComponent } from './layout/layout-auth/layout-auth.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';
import { authGuard } from '@app/core';
import { LOTERIA_ROUTES } from './features/loteria/loteria.routes';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'loterias'
    },
    {
        path: '',
        component: LayoutAuthComponent,
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: '',
        component: LayoutMainComponent,
        children: [
            ...LOTERIA_ROUTES
        ]
    }
];
