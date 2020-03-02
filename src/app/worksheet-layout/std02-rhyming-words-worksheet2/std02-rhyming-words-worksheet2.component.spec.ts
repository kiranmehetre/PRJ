import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02RhymingWordsWorksheet2Component } from './std02-rhyming-words-worksheet2.component';

describe('Std02RhymingWordsWorksheet2Component', () => {
  let component: Std02RhymingWordsWorksheet2Component;
  let fixture: ComponentFixture<Std02RhymingWordsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02RhymingWordsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02RhymingWordsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
