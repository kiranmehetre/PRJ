import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ConjunctionsWorksheet1Component } from './std01-conjunctions-worksheet1.component';

describe('Std01ConjunctionsWorksheet1Component', () => {
  let component: Std01ConjunctionsWorksheet1Component;
  let fixture: ComponentFixture<Std01ConjunctionsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ConjunctionsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ConjunctionsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
