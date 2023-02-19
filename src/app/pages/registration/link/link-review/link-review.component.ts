import { Component, Input, OnInit, Output } from '@angular/core';
import { Link } from '@model/default/link';

@Component({
  selector: 'ngx-link-review',
  templateUrl: './link-review.component.html',
  styleUrls: ['./link-review.component.scss']
})
export class LinkReviewComponent {

  @Input()
  public link: Link;

  constructor() { }

}
