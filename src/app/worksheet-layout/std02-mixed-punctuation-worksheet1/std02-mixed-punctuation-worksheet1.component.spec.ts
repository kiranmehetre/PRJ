import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedPunctuationWorksheet1Component } from './std02-mixed-punctuation-worksheet1.component';

describe('Std02MixedPunctuationWorksheet1Component', () => {
  let component: Std02MixedPunctuationWorksheet1Component;
  let fixture: ComponentFixture<Std02MixedPunctuationWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedPunctuationWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedPunctuationWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
