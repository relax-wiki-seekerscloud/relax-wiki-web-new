import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementDefaultComponent } from './advertisement-default.component';

describe('AdvertisementDefaultComponent', () => {
  let component: AdvertisementDefaultComponent;
  let fixture: ComponentFixture<AdvertisementDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementDefaultComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdvertisementDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
