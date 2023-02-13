import { filter } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '@model/default/address';
import { AddressService } from 'app/pages/registration/address/address.service';

@Component({
  selector: 'ngx-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.scss']
})
export class SelectAddressComponent implements OnInit {

  @Input()
  public status: string = 'basic';

  @Input()
  public showTitle: Boolean = true

  @Input()
  public addSelectOption: Boolean = false

  @Output()
  public selectAddress = new EventEmitter()

  public groups: {name:string; values: Address[] }[] = []

  public address: Address;

  public adresses: Address[]

  constructor(private service: AddressService) {
    this.groups.push(
      {name : 'Avenida', values:[]},
      {name : 'Rua', values:[]},
      {name : 'Fazenda', values:[]},
      {name : 'Travessa', values:[]},
      {name : 'Praça', values:[]},
      {name : 'Outros', values:[]},
    )
  }

  ngOnInit(): void {

    this.service.getAll().subscribe(
      (adresses: Address[])=>{
        this.createGroups(adresses)
      }
    );

  }

  createGroups(adresses: Address[]){
    this.groups.forEach(g =>{
      g.values = adresses.filter(a => a.name.startsWith(g.name))
      .sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    })

    this.groups[5].values =
    adresses.filter(a => {
      a.name.startsWith(this.groups[0].name) &&
      a.name.startsWith(this.groups[1].name) &&
      a.name.startsWith(this.groups[2].name) &&
      a.name.startsWith(this.groups[3].name) &&
      a.name.startsWith(this.groups[4].name)
    }).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

  }

  selectedChange(address: Address){
    this.selectAddress.emit(address)
  }

  compareById(v1: Address, v2: Address): boolean {
    return v1?.id === v2?.id;
  }
}
