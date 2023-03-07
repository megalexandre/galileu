import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkInactiveComponent } from './link-inactive.component';

describe('LinkInactiveComponent', () => {
  let component: LinkInactiveComponent;
  let fixture: ComponentFixture<LinkInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkInactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
