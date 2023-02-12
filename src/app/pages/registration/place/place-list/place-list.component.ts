import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '@model/default/place';
import { PlaceFilter } from '@model/filter/place-filter';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { PlaceService } from '../place.service';

@Component({
  selector: 'ngx-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  public filter: PlaceFilter = {
    page: 0,
    pageSize: 10,
    direction: 'ASC',
    sortedField: 'letter'
  };

  public page: Page<Place>;
  public loading: boolean =  false;

  constructor(
    private service: PlaceService,
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
