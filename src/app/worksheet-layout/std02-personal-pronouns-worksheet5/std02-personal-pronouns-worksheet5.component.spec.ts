import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PersonalPronounsWorksheet5Component } from './std02-personal-pronouns-worksheet5.component';

describe('Std02PersonalPronounsWorksheet5Component', () => {
  let component: Std02PersonalPronounsWorksheet5Component;
  let fixture: ComponentFixture<Std02PersonalPronounsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PersonalPronounsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PersonalPronounsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
