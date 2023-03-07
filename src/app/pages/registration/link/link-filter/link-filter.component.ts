import { Component, Input, OnInit } from '@angular/core';
import { LinkFilter } from '@model/filter/link-filter';

@Component({
  selector: 'ngx-link-filter',
  templateUrl: './link-filter.component.html',
  styleUrls: ['./link-filter.component.scss']
})
export class LinkFilterComponent  {

  @Input()
  filter: LinkFilter

  active?: boolean;

  constructor() { }

}
