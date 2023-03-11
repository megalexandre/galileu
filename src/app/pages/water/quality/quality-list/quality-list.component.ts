import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quality } from '@model/default/quality';
import { QualityFilter } from '@model/filter/quality-filter';
import { Page } from '@model/page';
import { DataService } from 'app/@shared/data.service';
import { QualityService } from '../quality.service';

@Component({
  selector: 'ngx-quality-list',
  templateUrl: './quality-list.component.html',
  styleUrls: ['./quality-list.component.scss']
})
export class QualityListComponent implements OnInit {

  public filter: QualityFilter = {};

  public page: Page<Quality>;
  public loading: boolean =  false;

  constructor(
    private service: QualityService,
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
    this.data.setId = id
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
        this.page.content.forEach(q =>
          q.gathering.sort((a, b) => a.param > b.param ? 1 : -1)
        )
        this.loading = false;
      },
    );
  }

}
