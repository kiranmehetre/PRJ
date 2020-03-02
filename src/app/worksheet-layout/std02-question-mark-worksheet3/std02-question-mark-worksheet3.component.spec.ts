import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02QuestionMarkWorksheet3Component } from './std02-question-mark-worksheet3.component';

describe('Std02QuestionMarkWorksheet3Component', () => {
  let component: Std02QuestionMarkWorksheet3Component;
  let fixture: ComponentFixture<Std02QuestionMarkWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02QuestionMarkWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02QuestionMarkWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
