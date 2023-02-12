import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { Page } from '@model/page';
import { HttpClient } from '@angular/common/http';
import { Group } from '@model/default/group';
import { GroupFilter } from '@model/filter/group-filter';

@Injectable()
export class GroupService {

  constructor(private http: HttpClient) { }

  public getPage(filter: GroupFilter): Observable<Page<Group>>{
      return this.http.post<Page<Group>>(`${environment.group.paginate}`, filter);
  }

  public getById(id: string): Observable<Group>{
    return this.http.get<Group>(`${environment.group.byId}${id}`);
  }

  public save(group: Group): Observable<Group>{
    return this.http.post<Group>(`${environment.group.save}`, group);
  }

  public update(group: Group): Observable<Group>{
    return this.http.put<Group>(`${environment.group.update}`, group);
  }

}
