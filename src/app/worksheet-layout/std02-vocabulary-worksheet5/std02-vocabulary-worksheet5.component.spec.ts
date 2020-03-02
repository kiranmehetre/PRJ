import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02VocabularyWorksheet5Component } from './std02-vocabulary-worksheet5.component';

describe('Std02VocabularyWorksheet5Component', () => {
  let component: Std02VocabularyWorksheet5Component;
  let fixture: ComponentFixture<Std02VocabularyWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02VocabularyWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02VocabularyWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
