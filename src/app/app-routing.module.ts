import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SemestreComponent} from './components/semestre/semestre.component';
import {EditSemestreComponent} from './components/edit-semestre/edit-semestre.component';

const routes: Routes = [
  {path: 'semestre', component:SemestreComponent},
  {path: 'editar-semestre/:id',component:EditSemestreComponent}


];

export const appRoutingProviders: any[] = []; 
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
