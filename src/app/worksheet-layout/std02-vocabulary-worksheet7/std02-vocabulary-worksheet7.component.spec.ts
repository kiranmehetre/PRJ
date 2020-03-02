import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02VocabularyWorksheet7Component } from './std02-vocabulary-worksheet7.component';

describe('Std02VocabularyWorksheet7Component', () => {
  let component: Std02VocabularyWorksheet7Component;
  let fixture: ComponentFixture<Std02VocabularyWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02VocabularyWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02VocabularyWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
