import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01RhymingWordsWorksheet10Component } from './std01-rhyming-words-worksheet10.component';

describe('Std01RhymingWordsWorksheet10Component', () => {
  let component: Std01RhymingWordsWorksheet10Component;
  let fixture: ComponentFixture<Std01RhymingWordsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01RhymingWordsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01RhymingWordsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
