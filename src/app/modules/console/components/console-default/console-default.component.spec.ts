import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleDefaultComponent } from './console-default.component';

describe('ConsoleDefaultComponent', () => {
  let component: ConsoleDefaultComponent;
  let fixture: ComponentFixture<ConsoleDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
