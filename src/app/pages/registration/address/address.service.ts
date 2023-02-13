import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Address } from '@model/default/address';
import { AddressFilter } from '@model/filter/address-filter';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class AddressService extends DefaultService<Address, AddressFilter> {

  public get env(){
    return `${environment.address}`
  }

  constructor(http: HttpClient) {
    super(http)
  }



}
