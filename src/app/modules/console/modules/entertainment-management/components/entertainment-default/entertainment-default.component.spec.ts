import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentDefaultComponent } from './entertainment-default.component';

describe('EntertainmentDefaultComponent', () => {
  let component: EntertainmentDefaultComponent;
  let fixture: ComponentFixture<EntertainmentDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
