import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';
import { AdminComponent }       from './admin/admin.component';
import { AuthComponent }        from './auth/auth.component';
import { MovieListComponent }   from './movie-list/movie-list.component';
import { MovieComponent }       from './movie/movie.component';

import { PagesComponent }     from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent }  from './miscellaneous/not-found/not-found.component';

const routes: Routes = [ {
    path     : '',
    component: PagesComponent,
    children : [
        {
            path     : 'dashboard',
            component: ECommerceComponent,
        },
        {
            path     : 'iot-dashboard',
            component: DashboardComponent,
        },
        // routerlar buraya tanımlanacak
        {
            path     : 'auth',
            component: AuthComponent,
        },
        {
            path     : 'admin',
            component: AdminComponent,
        },
        {
            path     : 'admin/:id',
            component: AdminComponent,
        },
        {
            path     : 'movie',
            component: MovieComponent,
        },
        {
            path     : 'movie/:id',
            component: MovieComponent,
        },
        {
            path     : 'movie-list',
            component: MovieListComponent,
        },
        {
            path        : 'layout',
            loadChildren: () => import('./layout/layout.module')
                .then(m => m.LayoutModule),
        },
        {
            path        : 'forms',
            loadChildren: () => import('./forms/forms.module')
                .then(m => m.FormsModule),
        },
        {
            path        : 'ui-features',
            loadChildren: () => import('./ui-features/ui-features.module')
                .then(m => m.UiFeaturesModule),
        },
        {
            path        : 'modal-overlays',
            loadChildren: () => import('./modal-overlays/modal-overlays.module')
                .then(m => m.ModalOverlaysModule),
        },
        {
            path        : 'extra-components',
            loadChildren: () => import('./extra-components/extra-components.module')
                .then(m => m.ExtraComponentsModule),
        },
        {
            path        : 'maps',
            loadChildren: () => import('./maps/maps.module')
                .then(m => m.MapsModule),
        },
        {
            path        : 'charts',
            loadChildren: () => import('./charts/charts.module')
                .then(m => m.ChartsModule),
        },
        {
            path        : 'editors',
            loadChildren: () => import('./editors/editors.module')
                .then(m => m.EditorsModule),
        },
        {
            path        : 'tables',
            loadChildren: () => import('./tables/tables.module')
                .then(m => m.TablesModule),
        },
        {
            path        : 'miscellaneous',
            loadChildren: () => import('./miscellaneous/miscellaneous.module')
                .then(m => m.MiscellaneousModule),
        },
        {
            path      : '',
            redirectTo: 'dashboard',
            pathMatch : 'full',
        },
        {
            path     : '**',
            component: NotFoundComponent,
        },
    ],
} ];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class PagesRoutingModule {
}
