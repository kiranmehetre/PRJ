import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PersonalPronounsWorksheet3Component } from './std01-personal-pronouns-worksheet3.component';

describe('Std01PersonalPronounsWorksheet3Component', () => {
  let component: Std01PersonalPronounsWorksheet3Component;
  let fixture: ComponentFixture<Std01PersonalPronounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PersonalPronounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PersonalPronounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
