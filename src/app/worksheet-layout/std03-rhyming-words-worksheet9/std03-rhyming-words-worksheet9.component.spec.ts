import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03RhymingWordsWorksheet9Component } from './std03-rhyming-words-worksheet9.component';

describe('Std03RhymingWordsWorksheet9Component', () => {
  let component: Std03RhymingWordsWorksheet9Component;
  let fixture: ComponentFixture<Std03RhymingWordsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03RhymingWordsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03RhymingWordsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
