import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01QuestionMarkWorksheet3Component } from './std01-question-mark-worksheet3.component';

describe('Std01QuestionMarkWorksheet3Component', () => {
  let component: Std01QuestionMarkWorksheet3Component;
  let fixture: ComponentFixture<Std01QuestionMarkWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01QuestionMarkWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01QuestionMarkWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
