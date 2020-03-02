import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02InterrogativePronounsWorksheet1Component } from './std02-interrogative-pronouns-worksheet1.component';

describe('Std02InterrogativePronounsWorksheet1Component', () => {
  let component: Std02InterrogativePronounsWorksheet1Component;
  let fixture: ComponentFixture<Std02InterrogativePronounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02InterrogativePronounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02InterrogativePronounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
