import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileNavBarComponent } from './user-profile-nav-bar.component';

describe('UserProfileNavBarComponent', () => {
  let component: UserProfileNavBarComponent;
  let fixture: ComponentFixture<UserProfileNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
