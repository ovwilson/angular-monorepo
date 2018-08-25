
import { Routes } from '@angular/router';

export const APPROUTES: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
