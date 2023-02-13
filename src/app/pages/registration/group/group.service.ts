import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Group } from '@model/default/group';
import { GroupFilter } from '@model/filter/group-filter';
import { DefaultService } from 'app/@shared/default.service';

@Injectable()
export class GroupService extends DefaultService<Group, GroupFilter> {

  public get env(): string {
    return `${environment.group}`
  }

  constructor(http: HttpClient) {
    super(http)
  }

}
