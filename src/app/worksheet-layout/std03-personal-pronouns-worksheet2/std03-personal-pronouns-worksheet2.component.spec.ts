import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PersonalPronounsWorksheet2Component } from './std03-personal-pronouns-worksheet2.component';

describe('Std03PersonalPronounsWorksheet2Component', () => {
  let component: Std03PersonalPronounsWorksheet2Component;
  let fixture: ComponentFixture<Std03PersonalPronounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PersonalPronounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PersonalPronounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
