import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentPoliciesComponent } from './entertainment-policies.component';

describe('EntertainmentPoliciesComponent', () => {
  let component: EntertainmentPoliciesComponent;
  let fixture: ComponentFixture<EntertainmentPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
