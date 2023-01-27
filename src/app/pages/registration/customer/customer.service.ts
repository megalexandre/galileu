import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { Page } from '@model/page';
import { Customer } from '@model/customer';
import { HttpClient } from '@angular/common/http';
import { CustomerFilter } from '@model/filter/customer-filter';

@Injectable()
export class CustomerService {

  constructor(public http: HttpClient) { }

  public getPage(filter: CustomerFilter): Observable<Page<Customer>>{
      return this.http.post<Page<Customer>>(`${environment.registration.paginate}`, filter);
  }

}
