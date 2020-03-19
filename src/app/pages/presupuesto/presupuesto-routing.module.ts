import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { PresupuestoComponent } from "./presupuesto.component";

import { ClasificadoresComponent } from "./clasificadores/clasificadores.component";
import { SecfunComponent } from './secfun/secfun.component';
import { TareasfunComponent } from "./tareasfun/tareasfun.component";
import { NotpresuComponent } from "./notpresu/notpresu.component";


const routes: Routes = [  {
    path: '',
    component: PresupuestoComponent,
    children: [
      {
        path: 'clasificadores',
        component: ClasificadoresComponent,
      },
      {
        path: 'secfun',
        component: SecfunComponent,
      },
      {
        path: 'tareasfun',
        component: TareasfunComponent,
      },
      {
        path: 'notpresu',
        component: NotpresuComponent,
      },
    ],
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class PresupuestoRoutingModule { }
