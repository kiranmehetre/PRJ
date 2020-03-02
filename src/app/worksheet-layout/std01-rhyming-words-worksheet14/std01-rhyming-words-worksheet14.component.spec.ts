import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01RhymingWordsWorksheet14Component } from './std01-rhyming-words-worksheet14.component';

describe('Std01RhymingWordsWorksheet14Component', () => {
  let component: Std01RhymingWordsWorksheet14Component;
  let fixture: ComponentFixture<Std01RhymingWordsWorksheet14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01RhymingWordsWorksheet14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01RhymingWordsWorksheet14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
