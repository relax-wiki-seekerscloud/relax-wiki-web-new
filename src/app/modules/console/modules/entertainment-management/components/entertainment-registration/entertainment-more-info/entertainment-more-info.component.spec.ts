import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentMoreInfoComponent } from './entertainment-more-info.component';

describe('EntertainmentMoreInfoComponent', () => {
  let component: EntertainmentMoreInfoComponent;
  let fixture: ComponentFixture<EntertainmentMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertainmentMoreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
