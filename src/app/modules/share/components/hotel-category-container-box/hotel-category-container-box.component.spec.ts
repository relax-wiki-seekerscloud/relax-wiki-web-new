import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCategoryContainerBoxComponent } from './hotel-category-container-box.component';

describe('HotelCategoryContainerBoxComponent', () => {
  let component: HotelCategoryContainerBoxComponent;
  let fixture: ComponentFixture<HotelCategoryContainerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelCategoryContainerBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelCategoryContainerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
