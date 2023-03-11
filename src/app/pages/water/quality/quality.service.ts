import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Quality } from '@model/default/quality';
import { QualityFilter } from '@model/filter/quality-filter';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class QualityService extends DefaultService<Quality, QualityFilter> {

  public get env(): string {
    return `${environment.quality}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
