import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlaceComponent } from './select-place.component';

describe('SelectPlaceComponent', () => {
  let component: SelectPlaceComponent;
  let fixture: ComponentFixture<SelectPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
