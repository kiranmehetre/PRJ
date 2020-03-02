import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02RhymingWordsWorksheet8Component } from './std02-rhyming-words-worksheet8.component';

describe('Std02RhymingWordsWorksheet8Component', () => {
  let component: Std02RhymingWordsWorksheet8Component;
  let fixture: ComponentFixture<Std02RhymingWordsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02RhymingWordsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02RhymingWordsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
