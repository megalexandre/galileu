import { Component, OnInit } from '@angular/core';
import { Transaction } from '@model/transaction';
import { ManagementService } from './management.service';

@Component({
  selector: 'ngx-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private managementService: ManagementService ) { }

  ngOnInit(): void {
    this.load()
  }

  private load(){
    this.managementService.find().subscribe(
      transactions => {
        this.transactions = transactions;
      }
    );
  }



}
