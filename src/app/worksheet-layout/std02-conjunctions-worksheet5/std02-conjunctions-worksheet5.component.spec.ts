import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ConjunctionsWorksheet5Component } from './std02-conjunctions-worksheet5.component';

describe('Std02ConjunctionsWorksheet5Component', () => {
  let component: Std02ConjunctionsWorksheet5Component;
  let fixture: ComponentFixture<Std02ConjunctionsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ConjunctionsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ConjunctionsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
