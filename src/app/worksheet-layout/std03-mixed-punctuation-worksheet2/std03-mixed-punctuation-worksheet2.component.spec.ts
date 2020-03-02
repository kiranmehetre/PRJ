import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedPunctuationWorksheet2Component } from './std03-mixed-punctuation-worksheet2.component';

describe('Std03MixedPunctuationWorksheet2Component', () => {
  let component: Std03MixedPunctuationWorksheet2Component;
  let fixture: ComponentFixture<Std03MixedPunctuationWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedPunctuationWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedPunctuationWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
