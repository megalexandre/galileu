import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Customer } from '@model/default/customer';
import { CustomerFilter } from '@model/filter/customer-filter';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class CustomerService extends DefaultService<Customer, CustomerFilter> {

  public get env(): string {
    return `${environment.customer}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
