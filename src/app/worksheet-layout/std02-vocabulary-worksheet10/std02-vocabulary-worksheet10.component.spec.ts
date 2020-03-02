import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02VocabularyWorksheet10Component } from './std02-vocabulary-worksheet10.component';

describe('Std02VocabularyWorksheet10Component', () => {
  let component: Std02VocabularyWorksheet10Component;
  let fixture: ComponentFixture<Std02VocabularyWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02VocabularyWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02VocabularyWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
