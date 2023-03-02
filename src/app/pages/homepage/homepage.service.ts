import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BarItem } from '@model/bar-item';
import { Observable } from 'rxjs';

@Injectable()
export class HomepageService {

  constructor(private http: HttpClient) {
  }

}
