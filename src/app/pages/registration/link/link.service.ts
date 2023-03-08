import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Link } from '@model/default/link';
import { LinkFilter } from '@model/filter/link-filter';
import { DefaultService } from 'app/@shared/default.service';
import { Observable } from 'rxjs';

@Injectable()
export class LinkService extends DefaultService<Link, LinkFilter> {

  public get env(): string {
    return `${environment.link}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

  public inactivate(id: String): Observable<any> {
    return this.http.delete<Link>(`${this.env}/inactive/${id}`);
  }

  public save(link: Link): Observable<Link>{
    return this.http.post<Link>(`${this.env}`, {
      customerId: link.customer.id,
      groupId: link.group.id,
      placeId: link.place.id,
      mailPlaceId: link.mailPlace.id
      }
    );
  }

}
