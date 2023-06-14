import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSearchSmallComponent } from './hotel-search-small.component';

describe('HotelSearchSmallComponent', () => {
  let component: HotelSearchSmallComponent;
  let fixture: ComponentFixture<HotelSearchSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSearchSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelSearchSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
