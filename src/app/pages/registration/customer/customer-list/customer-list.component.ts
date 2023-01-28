import { CustomerFilter } from './../../../../@core/data/model/filter/customer-filter';
import { Component, OnInit } from '@angular/core';
import { Customer } from '@model/customer';
import { Page } from '@model/page';
import { CustomerService } from '../customer.service';

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
    pageSize: 5,
    direction: 'ASC',
    sortedField: 'name'
  };

  public personType : 'PERSON'|'LEGAL'  = 'PERSON';

  public page: Page<Customer>;
  public loading: boolean =  false;

  constructor(private service: CustomerService){

  }

  ngOnInit(): void {
    this.search()
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
    this.search();
  }

  public search() {
    this.loading = true;
    this.service.getPage(this.filter).subscribe(
      page => {
        this.page = page;
        this.loading = false;
      },
    );
  }

}