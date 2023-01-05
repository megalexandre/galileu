import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-kanbam-column',
  templateUrl: './kanbam-column.component.html',
  styleUrls: ['./kanbam-column.component.scss']
})
export class KanbamColumnComponent {

  @Input()
  title: string

  constructor() { }

}
