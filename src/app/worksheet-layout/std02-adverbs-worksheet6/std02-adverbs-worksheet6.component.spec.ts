import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02AdverbsWorksheet6Component } from './std02-adverbs-worksheet6.component';

describe('Std02AdverbsWorksheet6Component', () => {
  let component: Std02AdverbsWorksheet6Component;
  let fixture: ComponentFixture<Std02AdverbsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02AdverbsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02AdverbsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
