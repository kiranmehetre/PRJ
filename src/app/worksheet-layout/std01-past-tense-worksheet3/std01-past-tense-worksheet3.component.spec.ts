import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PastTenseWorksheet3Component } from './std01-past-tense-worksheet3.component';

describe('Std01PastTenseWorksheet3Component', () => {
  let component: Std01PastTenseWorksheet3Component;
  let fixture: ComponentFixture<Std01PastTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PastTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PastTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
