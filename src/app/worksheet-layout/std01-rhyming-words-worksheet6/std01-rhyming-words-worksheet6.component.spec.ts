import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01RhymingWordsWorksheet6Component } from './std01-rhyming-words-worksheet6.component';

describe('Std01RhymingWordsWorksheet6Component', () => {
  let component: Std01RhymingWordsWorksheet6Component;
  let fixture: ComponentFixture<Std01RhymingWordsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01RhymingWordsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01RhymingWordsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
