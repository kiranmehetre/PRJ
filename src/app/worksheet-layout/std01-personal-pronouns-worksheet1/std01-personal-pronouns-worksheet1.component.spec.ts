import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PersonalPronounsWorksheet1Component } from './std01-personal-pronouns-worksheet1.component';

describe('Std01PersonalPronounsWorksheet1Component', () => {
  let component: Std01PersonalPronounsWorksheet1Component;
  let fixture: ComponentFixture<Std01PersonalPronounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PersonalPronounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PersonalPronounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
