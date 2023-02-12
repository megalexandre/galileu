import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { Page } from '@model/page';
import { HttpClient } from '@angular/common/http';
import { Address } from '@model/default/address';
import { AddressFilter } from '@model/filter/address-filter';

@Injectable()
export class AddressService {

  constructor(private http: HttpClient) { }

  public getPage(filter: AddressFilter): Observable<Page<Address>>{
      return this.http.post<Page<Address>>(`${environment.address.paginate}`, filter);
  }

  public getAll(): Observable<Address[]>{
    return this.http.get<Address[]>(`${environment.address.getAll}`);
  }

  public getById(id: string): Observable<Address>{
    return this.http.get<Address>(`${environment.address.byId}${id}`);
  }

  public save(address: Address): Observable<Address>{
    return this.http.post<Address>(`${environment.address.save}`, address);
  }

  public update(address: Address): Observable<Address>{
    return this.http.put<Address>(`${environment.address.update}`, address);
  }

}
