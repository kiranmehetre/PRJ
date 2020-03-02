import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03QuestionMarkWorksheet1Component } from './std03-question-mark-worksheet1.component';

describe('Std03QuestionMarkWorksheet1Component', () => {
  let component: Std03QuestionMarkWorksheet1Component;
  let fixture: ComponentFixture<Std03QuestionMarkWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03QuestionMarkWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03QuestionMarkWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
