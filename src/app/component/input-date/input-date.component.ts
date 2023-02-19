import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent {

  @Input()
  public status: string = 'basic';

  @Input()
  public date?: string = null;

  @Output()
  public dateChange: EventEmitter<string> = new EventEmitter<string>();

  emiteDate() {
    this.dateChange.emit(this.date)
  }

}
