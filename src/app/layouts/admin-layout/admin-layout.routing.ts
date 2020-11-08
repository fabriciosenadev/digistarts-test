import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { Exercise1Component } from 'app/exercise1/exercise1.component';
import { Exercise2Component } from 'app/exercise2/exercise2.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'exercise1',  component: Exercise1Component },
    { path: 'exercise2',  component: Exercise2Component },
];
