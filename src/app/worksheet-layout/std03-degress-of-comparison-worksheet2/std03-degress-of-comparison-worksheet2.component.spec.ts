import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03DegressOfComparisonWorksheet2Component } from './std03-degress-of-comparison-worksheet2.component';

describe('Std03DegressOfComparisonWorksheet2Component', () => {
  let component: Std03DegressOfComparisonWorksheet2Component;
  let fixture: ComponentFixture<Std03DegressOfComparisonWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03DegressOfComparisonWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03DegressOfComparisonWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
