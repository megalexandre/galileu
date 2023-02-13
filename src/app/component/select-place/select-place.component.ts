import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Address } from '@model/default/address';
import { Place } from '@model/default/place';
import { PlaceFilter } from '@model/filter/place-filter';
import { Page } from '@model/page';
import { PlaceService } from 'app/pages/registration/place/place.service';

@Component({
  selector: 'ngx-select-place',
  templateUrl: './select-place.component.html',
  styleUrls: ['./select-place.component.scss']
})
export class SelectPlaceComponent implements OnInit{

  @Output()
  public selectPlace = new EventEmitter()

  public place: Place = null;

  public filter: PlaceFilter = {
    page: 0,
    pageSize: 10,
    direction: 'ASC',
    address: null,
    sortedField: 'letter'
  };

  public page: Page<Place>;
  public loading: boolean =  false;

  constructor(
    private service: PlaceService,
    ){
  }

  ngOnInit(): void {
    this.search();
  }

  public emitPlace(place: Place){
    this.place = place
    this.selectPlace.emit(place)
  }

  public clearPlace(){
    this.place = null
    this.selectPlace.emit(null)
  }

  public selectAddress(address: Address){
    this.filter.address = address
    this.search()
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


