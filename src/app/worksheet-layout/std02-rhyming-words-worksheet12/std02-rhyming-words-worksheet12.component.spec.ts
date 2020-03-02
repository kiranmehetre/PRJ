import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02RhymingWordsWorksheet12Component } from './std02-rhyming-words-worksheet12.component';

describe('Std02RhymingWordsWorksheet12Component', () => {
  let component: Std02RhymingWordsWorksheet12Component;
  let fixture: ComponentFixture<Std02RhymingWordsWorksheet12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02RhymingWordsWorksheet12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02RhymingWordsWorksheet12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
