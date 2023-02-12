import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { Page } from '@model/page';
import { HttpClient } from '@angular/common/http';
import { Place } from '@model/default/place';
import { PlaceFilter } from '@model/filter/place-filter';

@Injectable()
export class PlaceService {

  constructor(private http: HttpClient) { }

  public getPage(filter: PlaceFilter): Observable<Page<Place>>{
      return this.http.post<Page<Place>>(`${environment.place.paginate}`, filter);
  }

  public getById(id: string): Observable<Place>{
    return this.http.get<Place>(`${environment.place.byId}${id}`);
  }

  public save(place: Place): Observable<Place>{
    return this.http.post<Place>(`${environment.place.save}`, place);
  }

  public update(place: Place): Observable<Place>{
    return this.http.put<Place>(`${environment.place.update}`, place);
  }

}
