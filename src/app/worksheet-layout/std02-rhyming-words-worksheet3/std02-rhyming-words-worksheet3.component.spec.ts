import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02RhymingWordsWorksheet3Component } from './std02-rhyming-words-worksheet3.component';

describe('Std02RhymingWordsWorksheet3Component', () => {
  let component: Std02RhymingWordsWorksheet3Component;
  let fixture: ComponentFixture<Std02RhymingWordsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02RhymingWordsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02RhymingWordsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
