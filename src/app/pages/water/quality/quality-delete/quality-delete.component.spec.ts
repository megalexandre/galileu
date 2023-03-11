import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityDeleteComponent } from './quality-delete.component';

describe('QualityDeleteComponent', () => {
  let component: QualityDeleteComponent;
  let fixture: ComponentFixture<QualityDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
