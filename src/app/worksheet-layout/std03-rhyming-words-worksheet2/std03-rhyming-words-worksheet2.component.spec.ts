import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03RhymingWordsWorksheet2Component } from './std03-rhyming-words-worksheet2.component';

describe('Std03RhymingWordsWorksheet2Component', () => {
  let component: Std03RhymingWordsWorksheet2Component;
  let fixture: ComponentFixture<Std03RhymingWordsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03RhymingWordsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03RhymingWordsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
