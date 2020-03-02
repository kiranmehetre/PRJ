import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02QuestionMarkWorksheet1Component } from './std02-question-mark-worksheet1.component';

describe('Std02QuestionMarkWorksheet1Component', () => {
  let component: Std02QuestionMarkWorksheet1Component;
  let fixture: ComponentFixture<Std02QuestionMarkWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02QuestionMarkWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02QuestionMarkWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
