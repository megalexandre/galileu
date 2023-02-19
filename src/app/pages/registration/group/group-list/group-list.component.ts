import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Group } from '@model/default/group';
import { GroupFilter } from '@model/filter/group-filter';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { GroupService } from '../group.service';

@Component({
  selector: 'ngx-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  public filter: GroupFilter = {
    name: '',
    page: 0,
    category: null,
    pageSize: 10,
    direction: 'ASC',
    sortedField: 'name'
  };

  public page: Page<Group>;
  public loading: boolean =  false;

  constructor(
    private service: GroupService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private data: DataService,
    ){
  }

  ngOnInit(): void {
    this.search();
  }

  public add(){
    this.router.navigate(['../add'],{relativeTo: this.activatedRoute})
  }

  public edit(id: string){
    this.data.setId = id
    this.router.navigate(['../edit'],{relativeTo: this.activatedRoute})
  }

  public remove(id: string){
    this.router.navigate(['../delete'],{relativeTo: this.activatedRoute})
  }

  public selectCategory(category: Category){
    this.filter.category = category;
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
