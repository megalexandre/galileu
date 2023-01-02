import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialComponent } from './financial.component';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    FinancialRoutingModule,
  ],
  declarations: [
    FinancialComponent,
  ],
})
export class FinancialModule { }
