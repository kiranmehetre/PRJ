import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ConjunctionsWorksheet10Component } from './std03-conjunctions-worksheet10.component';

describe('Std03ConjunctionsWorksheet10Component', () => {
  let component: Std03ConjunctionsWorksheet10Component;
  let fixture: ComponentFixture<Std03ConjunctionsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ConjunctionsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ConjunctionsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
