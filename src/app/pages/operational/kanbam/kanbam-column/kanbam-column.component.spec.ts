import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbamColumnComponent } from './kanbam-column.component';

describe('KanbamColumnComponent', () => {
  let component: KanbamColumnComponent;
  let fixture: ComponentFixture<KanbamColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbamColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbamColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
