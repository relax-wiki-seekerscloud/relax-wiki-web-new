import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarTwoComponent } from './nav-bar-two.component';

describe('NavBarTwoComponent', () => {
  let component: NavBarTwoComponent;
  let fixture: ComponentFixture<NavBarTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
