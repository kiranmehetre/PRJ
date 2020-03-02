import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02QuestionMarkWorksheet2Component } from './std02-question-mark-worksheet2.component';

describe('Std02QuestionMarkWorksheet2Component', () => {
  let component: Std02QuestionMarkWorksheet2Component;
  let fixture: ComponentFixture<Std02QuestionMarkWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02QuestionMarkWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02QuestionMarkWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
