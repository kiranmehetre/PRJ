import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PastTenseWorksheet1Component } from './std01-past-tense-worksheet1.component';

describe('Std01PastTenseWorksheet1Component', () => {
  let component: Std01PastTenseWorksheet1Component;
  let fixture: ComponentFixture<Std01PastTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PastTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PastTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
