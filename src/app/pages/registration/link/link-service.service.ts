import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Customer } from '@model/default/customer';
import { Link } from '@model/default/link';
import { CustomerFilter } from '@model/filter/customer-filter';
import { LinkFilter } from '@model/filter/link-filter';
import { Page } from '@model/page';
import { Observable } from 'rxjs';

@Injectable()
export class LinkService {

  constructor(private http: HttpClient) { }

  public getPage(filter: LinkFilter): Observable<Page<Link>>{
      return this.http.post<Page<Link>>(`${environment.link.paginate}`, filter);
  }

  public getById(id: string): Observable<Link>{
    return this.http.get<Link>(`${environment.link.byId}${id}`);
  }

  public save(data: Link): Observable<Link>{
    return this.http.post<Link>(`${environment.link.save}`, data);
  }

  public update(data: Link): Observable<Customer>{
    return this.http.put<Customer>(`${environment.link.update}`, data);
  }

}
