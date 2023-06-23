import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentListingSuccessfulComponent } from './entertainment-listing-successful.component';

describe('EntertainmentListingSuccessfulComponent', () => {
  let component: EntertainmentListingSuccessfulComponent;
  let fixture: ComponentFixture<EntertainmentListingSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentListingSuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentListingSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
