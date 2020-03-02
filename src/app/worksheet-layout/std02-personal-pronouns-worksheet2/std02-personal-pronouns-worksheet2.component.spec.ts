import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PersonalPronounsWorksheet2Component } from './std02-personal-pronouns-worksheet2.component';

describe('Std02PersonalPronounsWorksheet2Component', () => {
  let component: Std02PersonalPronounsWorksheet2Component;
  let fixture: ComponentFixture<Std02PersonalPronounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PersonalPronounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PersonalPronounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
