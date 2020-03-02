import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01RhymingWordsWorksheet15Component } from './std01-rhyming-words-worksheet15.component';

describe('Std01RhymingWordsWorksheet15Component', () => {
  let component: Std01RhymingWordsWorksheet15Component;
  let fixture: ComponentFixture<Std01RhymingWordsWorksheet15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01RhymingWordsWorksheet15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01RhymingWordsWorksheet15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
