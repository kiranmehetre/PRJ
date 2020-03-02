import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03VocabularyWorksheet2Component } from './std03-vocabulary-worksheet2.component';

describe('Std03VocabularyWorksheet2Component', () => {
  let component: Std03VocabularyWorksheet2Component;
  let fixture: ComponentFixture<Std03VocabularyWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03VocabularyWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03VocabularyWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
