import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03RhymingWordsWorksheet6Component } from './std03-rhyming-words-worksheet6.component';

describe('Std03RhymingWordsWorksheet6Component', () => {
  let component: Std03RhymingWordsWorksheet6Component;
  let fixture: ComponentFixture<Std03RhymingWordsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03RhymingWordsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03RhymingWordsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
