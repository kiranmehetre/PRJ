import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02VocabularyWorksheet9Component } from './std02-vocabulary-worksheet9.component';

describe('Std02VocabularyWorksheet9Component', () => {
  let component: Std02VocabularyWorksheet9Component;
  let fixture: ComponentFixture<Std02VocabularyWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02VocabularyWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02VocabularyWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
