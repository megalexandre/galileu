import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTableFooterComponent } from './app-table-footer.component';

describe('AppTableFooterComponent', () => {
  let component: AppTableFooterComponent;
  let fixture: ComponentFixture<AppTableFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTableFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
