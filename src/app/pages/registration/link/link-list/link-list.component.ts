import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Link } from '@model/default/link';
import { LinkFilter } from '@model/filter/link-filter';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { LinkService } from '../link-service.service';

@Component({
  selector: 'ngx-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {

  public filter: LinkFilter = {
    name: '',
    document: '',
    page: 0,
    pageSize: 10,
    direction: 'ASC',
    sortedField: 'name'
  };

  public page: Page<Link>;
  public loading: boolean =  false;

  constructor(
    private service: LinkService,
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
