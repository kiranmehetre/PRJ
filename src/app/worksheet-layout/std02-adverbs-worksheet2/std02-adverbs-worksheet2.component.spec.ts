import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AdverbsWorksheet2Component } from './std02-adverbs-worksheet2.component';

describe('Std02AdverbsWorksheet2Component', () => {
  let component: Std02AdverbsWorksheet2Component;
  let fixture: ComponentFixture<Std02AdverbsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AdverbsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AdverbsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
