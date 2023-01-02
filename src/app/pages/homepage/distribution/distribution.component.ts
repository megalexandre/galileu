import { Component, OnInit } from '@angular/core';
import { BarItem } from '@model/bar-item';
import { DistributionService } from './distribution.service';

@Component({
  selector: 'ngx-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss'],
})
export class DistributionComponent implements OnInit {

  public syntheticDistribution: BarItem[];
  public analyticalDistribution: BarItem[];
  public currentMonth: String;
  public monthOfYear: String[];

  public loadedSyntheticDistribution = false;
  public loadedAnalyticalDistribution = false;

  constructor(private service: DistributionService) { }

  ngOnInit(): void {
    this.filterSyntheticDistribution();
    this.filterAnalyticalDistribution();

    this.currentMonth = this.service.getCurrentMonth();
    this.monthOfYear = this.service.getMonthsOfYear();
  }


  filterSyntheticDistribution(selected: string = '') {
    this.loadedSyntheticDistribution = false;
    this.service.findSyntheticDistribution(selected).subscribe(syntheticDistribution => {
      this.syntheticDistribution = syntheticDistribution;
      this.loadedSyntheticDistribution = true;
    });
  }

  filterAnalyticalDistribution(selected: string = '') {
    this.loadedAnalyticalDistribution = false;
    this.service.findAnalyticalDistribution(selected).subscribe(analyticalDistribution => {
      this.analyticalDistribution = analyticalDistribution;
      this.loadedAnalyticalDistribution = true;
    });
  }


}
