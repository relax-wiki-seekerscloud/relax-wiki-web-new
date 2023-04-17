import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementsVideoComponent } from './advertisements-video.component';

describe('AdvertisementsVideoComponent', () => {
  let component: AdvertisementsVideoComponent;
  let fixture: ComponentFixture<AdvertisementsVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementsVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
