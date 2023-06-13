import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityNavbarComponent } from './activity-navbar.component';

describe('ActivityNavbarComponent', () => {
  let component: ActivityNavbarComponent;
  let fixture: ComponentFixture<ActivityNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
