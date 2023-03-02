import { HttpClient } from '@angular/common/http';
import { Page } from '@model/page';
import { Observable } from 'rxjs';

export abstract class DefaultService <D, F> {

  public abstract env: String

  constructor(public http: HttpClient) { }

  public getPage(filter: F): Observable<Page<D>>{
    return this.http.post<Page<D>>(`${this.env+'/paginate'}`, filter);
  }

  public getById(id: string): Observable<D>{
    return this.http.get<D>(`${this.env+'/'}${id}`);
  }

  public delete(id: string): Observable<D>{
    return this.http.delete<D>(`${this.env+'/delete'}/${id}`);
  }

  public save(d: D): Observable<D>{
    return this.http.post<D>(`${this.env}`, d);
  }

  public update(d: D): Observable<D>{
    return this.http.put<D>(`${this.env+'/update'}`, d);
  }


  public getAll(): Observable<D[]>{
    return this.http.get<D[]>(`${this.env + '/list'}`);
  }

}
