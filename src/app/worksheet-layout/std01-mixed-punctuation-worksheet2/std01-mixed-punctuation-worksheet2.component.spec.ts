import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedPunctuationWorksheet2Component } from './std01-mixed-punctuation-worksheet2.component';

describe('Std01MixedPunctuationWorksheet2Component', () => {
  let component: Std01MixedPunctuationWorksheet2Component;
  let fixture: ComponentFixture<Std01MixedPunctuationWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedPunctuationWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedPunctuationWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
