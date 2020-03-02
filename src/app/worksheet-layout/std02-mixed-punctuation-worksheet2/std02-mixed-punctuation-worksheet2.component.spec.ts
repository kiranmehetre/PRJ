import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedPunctuationWorksheet2Component } from './std02-mixed-punctuation-worksheet2.component';

describe('Std02MixedPunctuationWorksheet2Component', () => {
  let component: Std02MixedPunctuationWorksheet2Component;
  let fixture: ComponentFixture<Std02MixedPunctuationWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedPunctuationWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedPunctuationWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
