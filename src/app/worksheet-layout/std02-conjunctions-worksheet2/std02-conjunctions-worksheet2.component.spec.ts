import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ConjunctionsWorksheet2Component } from './std02-conjunctions-worksheet2.component';

describe('Std02ConjunctionsWorksheet2Component', () => {
  let component: Std02ConjunctionsWorksheet2Component;
  let fixture: ComponentFixture<Std02ConjunctionsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ConjunctionsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ConjunctionsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
