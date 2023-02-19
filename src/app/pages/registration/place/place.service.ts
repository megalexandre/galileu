import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Place } from '@model/default/place';
import { PlaceFilter } from '@model/filter/place-filter';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class PlaceService extends DefaultService<Place, PlaceFilter> {

  public get env(): string {
    return `${environment.place}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
