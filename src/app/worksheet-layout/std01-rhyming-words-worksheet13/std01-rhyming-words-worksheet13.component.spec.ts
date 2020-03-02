import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01RhymingWordsWorksheet13Component } from './std01-rhyming-words-worksheet13.component';

describe('Std01RhymingWordsWorksheet13Component', () => {
  let component: Std01RhymingWordsWorksheet13Component;
  let fixture: ComponentFixture<Std01RhymingWordsWorksheet13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01RhymingWordsWorksheet13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01RhymingWordsWorksheet13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
