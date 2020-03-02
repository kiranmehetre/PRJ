import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03VocabularyWorksheet5Component } from './std03-vocabulary-worksheet5.component';

describe('Std03VocabularyWorksheet5Component', () => {
  let component: Std03VocabularyWorksheet5Component;
  let fixture: ComponentFixture<Std03VocabularyWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03VocabularyWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03VocabularyWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
