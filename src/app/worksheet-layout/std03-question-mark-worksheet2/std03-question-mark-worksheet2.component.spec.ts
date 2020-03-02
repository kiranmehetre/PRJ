import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03QuestionMarkWorksheet2Component } from './std03-question-mark-worksheet2.component';

describe('Std03QuestionMarkWorksheet2Component', () => {
  let component: Std03QuestionMarkWorksheet2Component;
  let fixture: ComponentFixture<Std03QuestionMarkWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03QuestionMarkWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03QuestionMarkWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
