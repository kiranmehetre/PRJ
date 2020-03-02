import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ConjunctionsWorksheet3Component } from './std02-conjunctions-worksheet3.component';

describe('Std02ConjunctionsWorksheet3Component', () => {
  let component: Std02ConjunctionsWorksheet3Component;
  let fixture: ComponentFixture<Std02ConjunctionsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ConjunctionsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ConjunctionsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
