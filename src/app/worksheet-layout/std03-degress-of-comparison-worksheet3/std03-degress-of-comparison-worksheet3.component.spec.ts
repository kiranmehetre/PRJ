import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03DegressOfComparisonWorksheet3Component } from './std03-degress-of-comparison-worksheet3.component';

describe('Std03DegressOfComparisonWorksheet3Component', () => {
  let component: Std03DegressOfComparisonWorksheet3Component;
  let fixture: ComponentFixture<Std03DegressOfComparisonWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03DegressOfComparisonWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03DegressOfComparisonWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
