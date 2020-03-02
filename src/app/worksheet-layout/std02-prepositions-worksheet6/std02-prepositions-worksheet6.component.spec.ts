import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PrepositionsWorksheet6Component } from './std02-prepositions-worksheet6.component';

describe('Std02PrepositionsWorksheet6Component', () => {
  let component: Std02PrepositionsWorksheet6Component;
  let fixture: ComponentFixture<Std02PrepositionsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PrepositionsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PrepositionsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
