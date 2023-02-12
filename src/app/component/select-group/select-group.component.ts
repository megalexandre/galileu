import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Group } from '@model/default/group';
import { Place } from '@model/default/place';
import { GroupFilter } from '@model/filter/group-filter';
import { Page } from '@model/page';
import { GroupService } from 'app/pages/registration/group/group.service';

@Component({
  selector: 'ngx-group-place',
  templateUrl: './select-group.component.html',
  styleUrls: ['./select-group.component.scss']
})
export class SelectGroupComponent implements OnInit{

  @Output()
  public selectGroup = new EventEmitter()
  public group: Group = null;

  public filter: GroupFilter = {
    page: 0,
    pageSize: 10,
    direction: 'ASC',
    sortedField: 'number'
  };

  public page: Page<Group>;
  public loading: boolean =  false;

  constructor(
    private service: GroupService,
    ){
  }

  ngOnInit(): void {
    this.search();
  }


  public order(field: string){
    this.filter.sortedField = field
    if(this.filter.direction ===  'ASC') {
      this.filter.direction = 'DESC';
    } else {
      this.filter.direction = 'ASC';
    }

    this.search();
  }

  public select(group: Group){
    this.group = group
    this.selectGroup.emit(group)
  }

  public clear(){
    this.group = null
    this.selectGroup.emit(null)
  }


  public paginate(page: number){
    this.filter.page = page;
    this.search('paginate');
  }

  public search(action: String = 'serch') {
    if(action ==='serch'){
      this.filter.page = 0;
    }

    this.loading = true;
    this.service.getPage(this.filter).subscribe(
      page => {
        this.page = page;
        this.loading = false;
      },
    );
  }

}


