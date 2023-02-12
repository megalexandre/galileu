import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceDeleteComponent } from './place-delete.component';


describe('PlaceDeleteComponent', () => {
  let component: PlaceDeleteComponent;
  let fixture: ComponentFixture<PlaceDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
