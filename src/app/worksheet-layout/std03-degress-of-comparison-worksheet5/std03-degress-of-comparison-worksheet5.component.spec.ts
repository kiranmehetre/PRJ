import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03DegressOfComparisonWorksheet5Component } from './std03-degress-of-comparison-worksheet5.component';

describe('Std03DegressOfComparisonWorksheet5Component', () => {
  let component: Std03DegressOfComparisonWorksheet5Component;
  let fixture: ComponentFixture<Std03DegressOfComparisonWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03DegressOfComparisonWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03DegressOfComparisonWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
