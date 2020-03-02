import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01QuestionMarkWorksheet2Component } from './std01-question-mark-worksheet2.component';

describe('Std01QuestionMarkWorksheet2Component', () => {
  let component: Std01QuestionMarkWorksheet2Component;
  let fixture: ComponentFixture<Std01QuestionMarkWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01QuestionMarkWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01QuestionMarkWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
