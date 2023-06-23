import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByBudgetComponent } from './filter-by-budget.component';

describe('FilterByBudgetComponent', () => {
  let component: FilterByBudgetComponent;
  let fixture: ComponentFixture<FilterByBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
