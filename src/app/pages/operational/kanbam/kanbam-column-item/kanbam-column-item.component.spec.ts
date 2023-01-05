import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbamColumnItemComponent } from './kanbam-column-item.component';

describe('KanbamColumnItemComponent', () => {
  let component: KanbamColumnItemComponent;
  let fixture: ComponentFixture<KanbamColumnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbamColumnItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbamColumnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
