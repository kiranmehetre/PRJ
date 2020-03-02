import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PastTenseWorksheet2Component } from './std01-past-tense-worksheet2.component';

describe('Std01PastTenseWorksheet2Component', () => {
  let component: Std01PastTenseWorksheet2Component;
  let fixture: ComponentFixture<Std01PastTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PastTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PastTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
