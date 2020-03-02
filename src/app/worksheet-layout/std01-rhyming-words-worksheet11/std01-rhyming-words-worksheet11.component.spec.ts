import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01RhymingWordsWorksheet11Component } from './std01-rhyming-words-worksheet11.component';

describe('Std01RhymingWordsWorksheet11Component', () => {
  let component: Std01RhymingWordsWorksheet11Component;
  let fixture: ComponentFixture<Std01RhymingWordsWorksheet11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01RhymingWordsWorksheet11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01RhymingWordsWorksheet11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
