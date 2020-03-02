import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03DegressOfComparisonWorksheet6Component } from './std03-degress-of-comparison-worksheet6.component';

describe('Std03DegressOfComparisonWorksheet6Component', () => {
  let component: Std03DegressOfComparisonWorksheet6Component;
  let fixture: ComponentFixture<Std03DegressOfComparisonWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03DegressOfComparisonWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03DegressOfComparisonWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
