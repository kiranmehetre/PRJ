import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AdverbsWorksheet3Component } from './std02-adverbs-worksheet3.component';

describe('Std02AdverbsWorksheet3Component', () => {
  let component: Std02AdverbsWorksheet3Component;
  let fixture: ComponentFixture<Std02AdverbsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AdverbsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AdverbsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
