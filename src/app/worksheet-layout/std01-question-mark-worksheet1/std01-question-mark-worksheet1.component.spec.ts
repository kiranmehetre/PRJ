import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01QuestionMarkWorksheet1Component } from './std01-question-mark-worksheet1.component';

describe('Std01QuestionMarkWorksheet1Component', () => {
  let component: Std01QuestionMarkWorksheet1Component;
  let fixture: ComponentFixture<Std01QuestionMarkWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01QuestionMarkWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01QuestionMarkWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
