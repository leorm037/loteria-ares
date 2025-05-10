import { Routes } from '@angular/router';
import { LayoutAuthComponent } from './layout/layout-auth/layout-auth.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutAuthComponent,
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: '',
        component: LayoutMainComponent,
        children: []
    }
];
