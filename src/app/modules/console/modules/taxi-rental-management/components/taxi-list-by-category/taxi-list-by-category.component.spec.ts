import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiListByCategoryComponent } from './taxi-list-by-category.component';

describe('TaxiListByCategoryComponent', () => {
  let component: TaxiListByCategoryComponent;
  let fixture: ComponentFixture<TaxiListByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiListByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxiListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
