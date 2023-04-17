import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentRegistrationComponent } from './entertainment-registration.component';

describe('EntertainmentRegistrationComponent', () => {
  let component: EntertainmentRegistrationComponent;
  let fixture: ComponentFixture<EntertainmentRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
