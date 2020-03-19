import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticaComponent } from './logistica.component';
import { RegistroprovComponent } from './registroprov/registroprov.component';
import { RegistroProvAComponent } from '../logistica/registroprov/registro-prov-a/registro-prov-a.component';
import { RegistroProvBComponent } from '../logistica/registroprov/registro-prov-b/registro-prov-b.component';



@NgModule({
  declarations: [LogisticaComponent, RegistroprovComponent, RegistroProvAComponent, RegistroProvBComponent],
  imports: [
    CommonModule
  ]
})
export class LogisticaModule { }
