import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedPunctuationWorksheet1Component } from './std03-mixed-punctuation-worksheet1.component';

describe('Std03MixedPunctuationWorksheet1Component', () => {
  let component: Std03MixedPunctuationWorksheet1Component;
  let fixture: ComponentFixture<Std03MixedPunctuationWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedPunctuationWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedPunctuationWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
