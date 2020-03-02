import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01InterrogativePronounsWorksheet1Component } from './std01-interrogative-pronouns-worksheet1.component';

describe('Std01InterrogativePronounsWorksheet1Component', () => {
  let component: Std01InterrogativePronounsWorksheet1Component;
  let fixture: ComponentFixture<Std01InterrogativePronounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01InterrogativePronounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01InterrogativePronounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
