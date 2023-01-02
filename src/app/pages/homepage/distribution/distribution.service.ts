import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BarItem } from '@model/bar-item';
import { Observable } from 'rxjs';

@Injectable()
export class DistributionService {

  constructor(private http: HttpClient) {
  }

  findAnalyticalDistribution(): Observable<BarItem[]> {
    return this.http.get<BarItem[]>(`${environment.dashboard.routers.planAccount.analytical}`);
  }

  findSyntheticDistribution(): Observable<BarItem[]> {
    return this.http.get<BarItem[]>(`${environment.dashboard.routers.planAccount.synthetic}`);
  }

  findPlanAccount(): Observable<BarItem[]> {
    return this.http.get<BarItem[]>(`${environment.dashboard.routers.planAccount}`);
  }
}
