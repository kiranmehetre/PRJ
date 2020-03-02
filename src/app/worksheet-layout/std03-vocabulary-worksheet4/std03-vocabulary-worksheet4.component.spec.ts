import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03VocabularyWorksheet4Component } from './std03-vocabulary-worksheet4.component';

describe('Std03VocabularyWorksheet4Component', () => {
  let component: Std03VocabularyWorksheet4Component;
  let fixture: ComponentFixture<Std03VocabularyWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03VocabularyWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03VocabularyWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
