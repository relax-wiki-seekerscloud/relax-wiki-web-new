import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBoxBorderComponent } from './content-box-border.component';

describe('ContentBoxBorderComponent', () => {
  let component: ContentBoxBorderComponent;
  let fixture: ComponentFixture<ContentBoxBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBoxBorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBoxBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
