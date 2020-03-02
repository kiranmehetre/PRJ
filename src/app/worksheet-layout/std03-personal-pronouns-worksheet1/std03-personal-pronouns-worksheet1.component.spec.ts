import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PersonalPronounsWorksheet1Component } from './std03-personal-pronouns-worksheet1.component';

describe('Std03PersonalPronounsWorksheet1Component', () => {
  let component: Std03PersonalPronounsWorksheet1Component;
  let fixture: ComponentFixture<Std03PersonalPronounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PersonalPronounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PersonalPronounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
