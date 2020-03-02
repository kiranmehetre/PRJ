import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03VocabularyWorksheet12Component } from './std03-vocabulary-worksheet12.component';

describe('Std03VocabularyWorksheet12Component', () => {
  let component: Std03VocabularyWorksheet12Component;
  let fixture: ComponentFixture<Std03VocabularyWorksheet12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03VocabularyWorksheet12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03VocabularyWorksheet12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
