import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PersonalPronounsWorksheet3Component } from './std03-personal-pronouns-worksheet3.component';

describe('Std03PersonalPronounsWorksheet3Component', () => {
  let component: Std03PersonalPronounsWorksheet3Component;
  let fixture: ComponentFixture<Std03PersonalPronounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PersonalPronounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PersonalPronounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
