import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarSteps4Component } from './status-bar-steps4.component';

describe('StatusBarSteps4Component', () => {
  let component: StatusBarSteps4Component;
  let fixture: ComponentFixture<StatusBarSteps4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusBarSteps4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusBarSteps4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
