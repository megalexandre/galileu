import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Transaction } from '@model/transaction';
import { Observable } from 'rxjs';

@Injectable()
export class ManagementService {

  constructor(private http: HttpClient) {
  }

  find(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.management.router}}`);
  }
}
