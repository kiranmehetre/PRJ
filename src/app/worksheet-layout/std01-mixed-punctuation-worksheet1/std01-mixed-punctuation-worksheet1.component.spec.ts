import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedPunctuationWorksheet1Component } from './std01-mixed-punctuation-worksheet1.component';

describe('Std01MixedPunctuationWorksheet1Component', () => {
  let component: Std01MixedPunctuationWorksheet1Component;
  let fixture: ComponentFixture<Std01MixedPunctuationWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedPunctuationWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedPunctuationWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
