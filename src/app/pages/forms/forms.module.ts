import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';


import { FormsComponent } from './forms.component';
import { ThemeModule } from '../../@theme/theme.module';

import { FormsRoutingModule } from './forms-routing.module';

import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';

import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,

    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    
    ngFormsModule,
  ],
  declarations: [
    FormsComponent,
    FormInputsComponent,
    DatepickerComponent,
    FormLayoutsComponent,
    ButtonsComponent,
  ],
})
export class FormsModule { }
