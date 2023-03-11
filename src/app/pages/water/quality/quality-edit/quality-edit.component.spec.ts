import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityEditComponent } from './quality-edit.component';

describe('QualityEditComponent', () => {
  let component: QualityEditComponent;
  let fixture: ComponentFixture<QualityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
