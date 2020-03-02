import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03RhymingWordsWorksheet7Component } from './std03-rhyming-words-worksheet7.component';

describe('Std03RhymingWordsWorksheet7Component', () => {
  let component: Std03RhymingWordsWorksheet7Component;
  let fixture: ComponentFixture<Std03RhymingWordsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03RhymingWordsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03RhymingWordsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
