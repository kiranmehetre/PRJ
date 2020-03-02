import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AdverbsWorksheet8Component } from './std02-adverbs-worksheet8.component';

describe('Std02AdverbsWorksheet8Component', () => {
  let component: Std02AdverbsWorksheet8Component;
  let fixture: ComponentFixture<Std02AdverbsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AdverbsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AdverbsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
