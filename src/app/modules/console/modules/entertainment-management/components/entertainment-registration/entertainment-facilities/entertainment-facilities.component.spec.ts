import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentFacilitiesComponent } from './entertainment-facilities.component';

describe('EntertainmentFacilitiesComponent', () => {
  let component: EntertainmentFacilitiesComponent;
  let fixture: ComponentFixture<EntertainmentFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
