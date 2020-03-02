import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PrepositionsWorksheet1Component } from './std02-prepositions-worksheet1.component';

describe('Std02PrepositionsWorksheet1Component', () => {
  let component: Std02PrepositionsWorksheet1Component;
  let fixture: ComponentFixture<Std02PrepositionsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PrepositionsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PrepositionsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
