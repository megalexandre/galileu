import { Component, Input, OnInit } from '@angular/core';
import { Page } from '@model/page';

@Component({
  selector: 'ngx-app-table-footer',
  templateUrl: './app-table-footer.component.html',
  styleUrls: ['./app-table-footer.component.scss']
})
export class AppTableFooterComponent{

  @Input()
  public page: Page<any>

  constructor() { }

}
