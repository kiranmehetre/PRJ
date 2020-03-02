import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedPunctuationWorksheet3Component } from './std01-mixed-punctuation-worksheet3.component';

describe('Std01MixedPunctuationWorksheet3Component', () => {
  let component: Std01MixedPunctuationWorksheet3Component;
  let fixture: ComponentFixture<Std01MixedPunctuationWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedPunctuationWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedPunctuationWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
