import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PersonalPronounsWorksheet5Component } from './std01-personal-pronouns-worksheet5.component';

describe('Std01PersonalPronounsWorksheet5Component', () => {
  let component: Std01PersonalPronounsWorksheet5Component;
  let fixture: ComponentFixture<Std01PersonalPronounsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PersonalPronounsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PersonalPronounsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
