
import { Routes } from '@angular/router';

export const APPROUTES: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule', data: { preload: true } },
    {
        path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule',
        data: { preload: true }
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
