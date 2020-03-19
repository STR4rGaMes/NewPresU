import { NgModule } from '@angular/core';

// Nebular
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


// componentes principales
import { PresupuestoComponent } from "./presupuesto.component";
import { PresupuestoRoutingModule } from "./presupuesto-routing.module";


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
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';


// vitas de los tree-view
import { ClasificadoresComponent} from "./clasificadores/clasificadores.component";
import { SecfunComponent } from './secfun/secfun.component';
import { TareasfunComponent } from './tareasfun/tareasfun.component';
import { NotpresuComponent } from './notpresu/notpresu.component';



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
    MatButtonModule,

    // tabs
    MatTabsModule,
  ],

  declarations: [
    PresupuestoComponent,

    ClasificadoresComponent,

    SecfunComponent,

    TareasfunComponent,

    NotpresuComponent,

    
  ],
  
})
export class PresupuestoModule { }
