import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxwikiLogoComponent } from './relaxwiki-logo.component';

describe('RelaxwikiLogoComponent', () => {
  let component: RelaxwikiLogoComponent;
  let fixture: ComponentFixture<RelaxwikiLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelaxwikiLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelaxwikiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
