import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ConjunctionsWorksheet8Component } from './std02-conjunctions-worksheet8.component';

describe('Std02ConjunctionsWorksheet8Component', () => {
  let component: Std02ConjunctionsWorksheet8Component;
  let fixture: ComponentFixture<Std02ConjunctionsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ConjunctionsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ConjunctionsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
