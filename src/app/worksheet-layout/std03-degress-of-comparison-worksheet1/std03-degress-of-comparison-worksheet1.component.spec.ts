import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03DegressOfComparisonWorksheet1Component } from './std03-degress-of-comparison-worksheet1.component';

describe('Std03DegressOfComparisonWorksheet1Component', () => {
  let component: Std03DegressOfComparisonWorksheet1Component;
  let fixture: ComponentFixture<Std03DegressOfComparisonWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03DegressOfComparisonWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03DegressOfComparisonWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
