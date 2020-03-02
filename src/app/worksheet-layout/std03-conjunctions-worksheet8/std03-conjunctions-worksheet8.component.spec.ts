import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ConjunctionsWorksheet8Component } from './std03-conjunctions-worksheet8.component';

describe('Std03ConjunctionsWorksheet8Component', () => {
  let component: Std03ConjunctionsWorksheet8Component;
  let fixture: ComponentFixture<Std03ConjunctionsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ConjunctionsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ConjunctionsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
