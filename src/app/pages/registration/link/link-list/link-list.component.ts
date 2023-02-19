import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@model/default/address';
import { Category } from '@model/default/group';
import { Link } from '@model/default/link';
import { LinkFilter } from '@model/filter/link-filter';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { LinkService } from '../link.service';

@Component({
  selector: 'ngx-link-list',
  templateUrl: './link-list.component.html',
})
export class LinkListComponent implements OnInit {

  public filter: LinkFilter = {

    group: {},
    customer: {},
    place: {
      number: null,
      letter: null,
      address: {name: "", id:"" },
    },
    personType: 'PERSON',
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

  selectCategory(category: Category){
    this.filter.group.category = category;
    this.search();
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

  public selectAddress(address: Address){
    this.filter.place.address = address;
    this.search();
  }

  public togglePersonType(){

    this.filter.personType = null;
    if(this.filter.personType === 'LEGAL'){
      this.filter.personType = 'PERSON'
    } else {
      this.filter.personType = 'LEGAL'
    }
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
