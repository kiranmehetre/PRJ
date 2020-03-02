import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ConjunctionsWorksheet4Component } from './std03-conjunctions-worksheet4.component';

describe('Std03ConjunctionsWorksheet4Component', () => {
  let component: Std03ConjunctionsWorksheet4Component;
  let fixture: ComponentFixture<Std03ConjunctionsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ConjunctionsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ConjunctionsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
