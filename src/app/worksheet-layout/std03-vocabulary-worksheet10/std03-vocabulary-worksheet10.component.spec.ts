import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03VocabularyWorksheet10Component } from './std03-vocabulary-worksheet10.component';

describe('Std03VocabularyWorksheet10Component', () => {
  let component: Std03VocabularyWorksheet10Component;
  let fixture: ComponentFixture<Std03VocabularyWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03VocabularyWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03VocabularyWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
