import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrometerComponent } from './hydrometer.component';

describe('HydrometerComponent', () => {
  let component: HydrometerComponent;
  let fixture: ComponentFixture<HydrometerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydrometerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
