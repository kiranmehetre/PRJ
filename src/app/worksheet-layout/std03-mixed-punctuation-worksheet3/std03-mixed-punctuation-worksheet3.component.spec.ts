import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedPunctuationWorksheet3Component } from './std03-mixed-punctuation-worksheet3.component';

describe('Std03MixedPunctuationWorksheet3Component', () => {
  let component: Std03MixedPunctuationWorksheet3Component;
  let fixture: ComponentFixture<Std03MixedPunctuationWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedPunctuationWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedPunctuationWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
