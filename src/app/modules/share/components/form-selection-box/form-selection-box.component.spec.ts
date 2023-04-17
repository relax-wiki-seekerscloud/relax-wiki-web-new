import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectionBoxComponent } from './form-selection-box.component';

describe('FormSelectionBoxComponent', () => {
  let component: FormSelectionBoxComponent;
  let fixture: ComponentFixture<FormSelectionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSelectionBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSelectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
