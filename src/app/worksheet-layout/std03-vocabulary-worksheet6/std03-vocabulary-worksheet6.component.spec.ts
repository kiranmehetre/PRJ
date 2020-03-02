import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03VocabularyWorksheet6Component } from './std03-vocabulary-worksheet6.component';

describe('Std03VocabularyWorksheet6Component', () => {
  let component: Std03VocabularyWorksheet6Component;
  let fixture: ComponentFixture<Std03VocabularyWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03VocabularyWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03VocabularyWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
