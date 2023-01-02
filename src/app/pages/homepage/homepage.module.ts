import { DistributionModule } from './distribution/distribution.module';
import { DistributionComponent } from './distribution/distribution.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HomepageService } from './homepage.service';


@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule,
    DistributionModule,
  ],

  declarations: [
    HomepageComponent,
  ],

  providers: [
    HomepageService,
  ],
})
export class HomepageModule { }
