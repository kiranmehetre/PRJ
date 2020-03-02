import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PersonalPronounsWorksheet3Component } from './std02-personal-pronouns-worksheet3.component';

describe('Std02PersonalPronounsWorksheet3Component', () => {
  let component: Std02PersonalPronounsWorksheet3Component;
  let fixture: ComponentFixture<Std02PersonalPronounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PersonalPronounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PersonalPronounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
