import { Component, OnInit } from '@angular/core';
import { BarItem } from '@model/bar-item';
import { DistributionService } from './distribution.service';

@Component({
  selector: 'ngx-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss']
})
export class DistributionComponent implements OnInit {

  public syntheticDistribution: BarItem[];
  public analyticalDistribution: BarItem[];

  constructor(private service: DistributionService) { }

  ngOnInit(): void {
    this.service.findSyntheticDistribution().subscribe(syntheticDistribution=>{
      this.syntheticDistribution = syntheticDistribution
    })

   this.service.findAnalyticalDistribution().subscribe(analyticalDistribution=>{
      this.analyticalDistribution = analyticalDistribution
    })

  }
}
