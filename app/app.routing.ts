import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './componentes/heroes.component';
import {DashboardComponent} from './componentes/Dashboard.component';
import { HeroDetailComponent } from './componentes/hero-detail.component';

const appRoutes: Routes = [
    {
  path: 'detail/:id',
  component: HeroDetailComponent
},
  {
  path: 'dashboard',
  component: DashboardComponent
},{
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);