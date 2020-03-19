import { NgModule } from '@angular/core';


import { PresupuestoComponent } from "./presupuesto.component";
import { ThemeModule } from '../../@theme/theme.module';

import { PresupuestoRoutingModule } from "./presupuesto-routing.module";

import { ClasificadoresComponent} from "./clasificadores/clasificadores.component";
import { SecfunComponent } from './secfun/secfun.component';

// tablas
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { MatSortModule } from "@angular/material/sort";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    ThemeModule,
    PresupuestoRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    
// material
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSortModule,
    MatDividerModule,MatListModule,MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],

  declarations: [
    PresupuestoComponent,

    ClasificadoresComponent,

    SecfunComponent,
    

  
  ],
  
})
export class PresupuestoModule { }
