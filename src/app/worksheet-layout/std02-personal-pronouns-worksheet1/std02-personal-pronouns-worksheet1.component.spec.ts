import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PersonalPronounsWorksheet1Component } from './std02-personal-pronouns-worksheet1.component';

describe('Std02PersonalPronounsWorksheet1Component', () => {
  let component: Std02PersonalPronounsWorksheet1Component;
  let fixture: ComponentFixture<Std02PersonalPronounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PersonalPronounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PersonalPronounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
