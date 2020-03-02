import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03RhymingWordsWorksheet5Component } from './std03-rhyming-words-worksheet5.component';

describe('Std03RhymingWordsWorksheet5Component', () => {
  let component: Std03RhymingWordsWorksheet5Component;
  let fixture: ComponentFixture<Std03RhymingWordsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03RhymingWordsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03RhymingWordsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
