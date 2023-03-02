import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  public setDate: EventEmitter<string> = new EventEmitter<string>();

  emiteDate() {
    this.setDate.emit(this.date.split('/').join('-'))
  }

}
