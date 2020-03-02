import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03DegressOfComparisonWorksheet4Component } from './std03-degress-of-comparison-worksheet4.component';

describe('Std03DegressOfComparisonWorksheet4Component', () => {
  let component: Std03DegressOfComparisonWorksheet4Component;
  let fixture: ComponentFixture<Std03DegressOfComparisonWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03DegressOfComparisonWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03DegressOfComparisonWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
