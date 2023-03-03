import { Dashboard } from './../../../@core/data/model/default/dashboard';
import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public dashboard: Dashboard
  public loaded: boolean = false

  constructor(private service: HomepageService) {

  }

  ngOnInit(): void {
    this.service.get().subscribe(
      (dashboard) =>{
        this.dashboard = dashboard
        this.loaded = true
      }
    )
  }



}
