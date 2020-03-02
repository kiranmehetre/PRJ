import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02RhymingWordsWorksheet9Component } from './std02-rhyming-words-worksheet9.component';

describe('Std02RhymingWordsWorksheet9Component', () => {
  let component: Std02RhymingWordsWorksheet9Component;
  let fixture: ComponentFixture<Std02RhymingWordsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02RhymingWordsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02RhymingWordsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
