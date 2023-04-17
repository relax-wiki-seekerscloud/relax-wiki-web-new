import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByEntertainmentActivityComponent } from './filter-by-entertainment-activity.component';

describe('FilterByEntertainmentActivityComponent', () => {
  let component: FilterByEntertainmentActivityComponent;
  let fixture: ComponentFixture<FilterByEntertainmentActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByEntertainmentActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByEntertainmentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
