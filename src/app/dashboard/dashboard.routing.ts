import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const APPROUTES: Routes = [
    { path: '', component: DashboardComponent, data: { title: 'dashboard', depth: 2 } }
];
