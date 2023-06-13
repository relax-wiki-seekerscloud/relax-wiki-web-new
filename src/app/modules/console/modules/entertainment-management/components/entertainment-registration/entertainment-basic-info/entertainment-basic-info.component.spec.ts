import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentBasicInfoComponent } from './entertainment-basic-info.component';

describe('EntertainmentBasicInfoComponent', () => {
  let component: EntertainmentBasicInfoComponent;
  let fixture: ComponentFixture<EntertainmentBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentBasicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
