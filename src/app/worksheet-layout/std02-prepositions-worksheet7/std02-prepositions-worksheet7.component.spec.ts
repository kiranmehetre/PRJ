import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PrepositionsWorksheet7Component } from './std02-prepositions-worksheet7.component';

describe('Std02PrepositionsWorksheet7Component', () => {
  let component: Std02PrepositionsWorksheet7Component;
  let fixture: ComponentFixture<Std02PrepositionsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PrepositionsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PrepositionsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
