import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

// para jalar de dentro del modulo especifica
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';

import { ThemeModule } from '../../@theme/theme.module';
// componentes de las 
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    MiscellaneousRoutingModule,
  ],
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent,
  ],
})
export class MiscellaneousModule { }
