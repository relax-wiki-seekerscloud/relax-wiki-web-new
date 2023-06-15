import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPropertyBoxComponent } from './select-property-box.component';

describe('SelectPropertyBoxComponent', () => {
  let component: SelectPropertyBoxComponent;
  let fixture: ComponentFixture<SelectPropertyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPropertyBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPropertyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
