import { months } from './../../../@shared/month.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BarItem } from '@model/bar-item';
import { Observable } from 'rxjs';

@Injectable()
export class DistributionService {

  constructor(private http: HttpClient) {
  }

  findAnalyticalDistribution(month: string): Observable<BarItem[]> {
    return this.http.get<BarItem[]>(`${environment.dashboard.routers.planAccount.analytical}/${month}`);
  }

  findSyntheticDistribution(month: string): Observable<BarItem[]> {
    return this.http.get<BarItem[]>(`${environment.dashboard.routers.planAccount.synthetic}/${month}`);
  }

  findPlanAccount(): Observable<BarItem[]> {
    return this.http.get<BarItem[]>(`${environment.dashboard.routers.planAccount}`);
  }

  getCurrentMonth(): string {
    return 'Janeiro';
  }

  getMonthsOfYear(): string[] {
    return months;
  }


}
