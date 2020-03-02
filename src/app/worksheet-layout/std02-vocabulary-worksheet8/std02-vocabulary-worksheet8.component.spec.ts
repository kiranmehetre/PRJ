import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02VocabularyWorksheet8Component } from './std02-vocabulary-worksheet8.component';

describe('Std02VocabularyWorksheet8Component', () => {
  let component: Std02VocabularyWorksheet8Component;
  let fixture: ComponentFixture<Std02VocabularyWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02VocabularyWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02VocabularyWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
