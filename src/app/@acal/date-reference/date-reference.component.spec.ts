import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateReferenceComponent } from './date-reference.component';

describe('DateReferenceComponent', () => {
  let component: DateReferenceComponent;
  let fixture: ComponentFixture<DateReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
