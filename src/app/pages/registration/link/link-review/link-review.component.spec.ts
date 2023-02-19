import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkReviewComponent } from './link-review.component';

describe('LinkReviewComponent', () => {
  let component: LinkReviewComponent;
  let fixture: ComponentFixture<LinkReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
