import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03VocabularyWorksheet11Component } from './std03-vocabulary-worksheet11.component';

describe('Std03VocabularyWorksheet11Component', () => {
  let component: Std03VocabularyWorksheet11Component;
  let fixture: ComponentFixture<Std03VocabularyWorksheet11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03VocabularyWorksheet11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03VocabularyWorksheet11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
