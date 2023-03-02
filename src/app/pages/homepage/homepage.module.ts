import { NbCardModule, NbListModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HomepageService } from './homepage.service';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    HomepageRoutingModule,
  ],

  declarations: [
    HomepageComponent,
    DetailComponent,
  ],

  providers: [
    HomepageService,
  ],
})
export class HomepageModule { }
