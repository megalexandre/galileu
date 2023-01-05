import { Component, Input, OnInit } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-kanbam-column-item',
  templateUrl: './kanbam-column-item.component.html',
  styleUrls: ['./kanbam-column-item.component.scss']
})
export class KanbamColumnItemComponent {

  @Input()
  task: string;

  @Input()
  accent: NbComponentStatus = 'basic';

  @Input()
  responsible: string = 'basic';

  constructor(){
    this.task;
    this.accent;
  }
}
