import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ConjunctionsWorksheet5Component } from './std03-conjunctions-worksheet5.component';

describe('Std03ConjunctionsWorksheet5Component', () => {
  let component: Std03ConjunctionsWorksheet5Component;
  let fixture: ComponentFixture<Std03ConjunctionsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ConjunctionsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ConjunctionsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
