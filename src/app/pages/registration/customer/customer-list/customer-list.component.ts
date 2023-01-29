import { CustomerFilter } from './../../../../@core/data/model/filter/customer-filter';
import { Component, OnInit } from '@angular/core';
import { Customer } from '@model/customer';
import { Page } from '@model/page';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public filter: CustomerFilter = {
    name: '',
    document: '',
    page: 0,
    pageSize: 10,
    direction: 'ASC',
    sortedField: 'name'
  };

  public personType : 'PERSON'|'LEGAL'  = 'PERSON';

  public page: Page<Customer>;
  public loading: boolean =  false;

  constructor(
    private service: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ){
  }

  ngOnInit(): void {
    this.search();
  }

  public add(){
    this.router.navigate(['../add'],{relativeTo: this.activatedRoute})
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

  public togglePersonType(){

    this.filter.document = null;
    if(this.personType === 'LEGAL'){
      this.personType = 'PERSON'
    } else {
      this.personType = 'LEGAL'
    }
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
