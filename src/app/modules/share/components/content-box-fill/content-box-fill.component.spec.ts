import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBoxFillComponent } from './content-box-fill.component';

describe('ContentBoxFillComponent', () => {
  let component: ContentBoxFillComponent;
  let fixture: ComponentFixture<ContentBoxFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBoxFillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBoxFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
