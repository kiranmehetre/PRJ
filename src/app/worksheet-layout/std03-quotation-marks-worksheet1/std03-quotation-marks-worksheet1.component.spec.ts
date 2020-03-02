import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03QuotationMarksWorksheet1Component } from './std03-quotation-marks-worksheet1.component';

describe('Std03QuotationMarksWorksheet1Component', () => {
  let component: Std03QuotationMarksWorksheet1Component;
  let fixture: ComponentFixture<Std03QuotationMarksWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03QuotationMarksWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03QuotationMarksWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
