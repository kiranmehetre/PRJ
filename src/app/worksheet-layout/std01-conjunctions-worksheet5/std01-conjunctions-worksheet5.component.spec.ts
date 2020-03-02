import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ConjunctionsWorksheet5Component } from './std01-conjunctions-worksheet5.component';

describe('Std01ConjunctionsWorksheet5Component', () => {
  let component: Std01ConjunctionsWorksheet5Component;
  let fixture: ComponentFixture<Std01ConjunctionsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ConjunctionsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ConjunctionsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
