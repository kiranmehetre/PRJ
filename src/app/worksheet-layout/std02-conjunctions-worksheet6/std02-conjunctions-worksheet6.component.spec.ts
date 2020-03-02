import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ConjunctionsWorksheet6Component } from './std02-conjunctions-worksheet6.component';

describe('Std02ConjunctionsWorksheet6Component', () => {
  let component: Std02ConjunctionsWorksheet6Component;
  let fixture: ComponentFixture<Std02ConjunctionsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ConjunctionsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ConjunctionsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
