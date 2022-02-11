import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'list',
        loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
    },
    {
        path: 'show/:id',
        loadChildren: () => import('./pages/show/show.module').then( m => m.ShowPageModule)
    },
    {
        path: 'view/:id',
        loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule)
    },
    {
        path: 'add',
        loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
    },
    {
        path: 'not-found',
        loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
