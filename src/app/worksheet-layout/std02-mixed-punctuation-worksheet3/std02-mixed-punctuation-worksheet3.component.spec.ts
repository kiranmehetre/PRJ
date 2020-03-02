import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedPunctuationWorksheet3Component } from './std02-mixed-punctuation-worksheet3.component';

describe('Std02MixedPunctuationWorksheet3Component', () => {
  let component: Std02MixedPunctuationWorksheet3Component;
  let fixture: ComponentFixture<Std02MixedPunctuationWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedPunctuationWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedPunctuationWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
