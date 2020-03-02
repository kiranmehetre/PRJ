import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02RhymingWordsWorksheet11Component } from './std02-rhyming-words-worksheet11.component';

describe('Std02RhymingWordsWorksheet11Component', () => {
  let component: Std02RhymingWordsWorksheet11Component;
  let fixture: ComponentFixture<Std02RhymingWordsWorksheet11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02RhymingWordsWorksheet11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02RhymingWordsWorksheet11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
