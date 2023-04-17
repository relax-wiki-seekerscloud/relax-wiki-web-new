import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCenterOwnerProfileComponent } from './activity-center-owner-profile.component';

describe('ActivityCenterOwnerProfileComponent', () => {
  let component: ActivityCenterOwnerProfileComponent;
  let fixture: ComponentFixture<ActivityCenterOwnerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityCenterOwnerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityCenterOwnerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
