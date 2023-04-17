import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentManagementComponent } from './entertainment-management.component';

describe('EntertainmentManagementComponent', () => {
  let component: EntertainmentManagementComponent;
  let fixture: ComponentFixture<EntertainmentManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
