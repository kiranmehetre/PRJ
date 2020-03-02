import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ConjunctionsWorksheet9Component } from './std03-conjunctions-worksheet9.component';

describe('Std03ConjunctionsWorksheet9Component', () => {
  let component: Std03ConjunctionsWorksheet9Component;
  let fixture: ComponentFixture<Std03ConjunctionsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ConjunctionsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ConjunctionsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
