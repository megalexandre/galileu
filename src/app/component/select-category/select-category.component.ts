import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {

  @Input()
  public category: string;

  @Input()
  public status: string = 'basic';

  @Output()
  public selectCategory = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  selectedChange(){
    this.selectCategory.emit(this.category)
  }

}
