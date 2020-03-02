import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03InterrogativePronounsWorksheet1Component } from './std03-interrogative-pronouns-worksheet1.component';

describe('Std03InterrogativePronounsWorksheet1Component', () => {
  let component: Std03InterrogativePronounsWorksheet1Component;
  let fixture: ComponentFixture<Std03InterrogativePronounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03InterrogativePronounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03InterrogativePronounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
