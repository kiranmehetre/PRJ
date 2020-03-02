import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01RhymingWordsWorksheet5Component } from './std01-rhyming-words-worksheet5.component';

describe('Std01RhymingWordsWorksheet5Component', () => {
  let component: Std01RhymingWordsWorksheet5Component;
  let fixture: ComponentFixture<Std01RhymingWordsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01RhymingWordsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01RhymingWordsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
