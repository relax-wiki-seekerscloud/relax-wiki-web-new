import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentPhotosComponent } from './entertainment-photos.component';

describe('EntertainmentPhotosComponent', () => {
  let component: EntertainmentPhotosComponent;
  let fixture: ComponentFixture<EntertainmentPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
