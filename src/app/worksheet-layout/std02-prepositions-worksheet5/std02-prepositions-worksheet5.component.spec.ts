import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PrepositionsWorksheet5Component } from './std02-prepositions-worksheet5.component';

describe('Std02PrepositionsWorksheet5Component', () => {
  let component: Std02PrepositionsWorksheet5Component;
  let fixture: ComponentFixture<Std02PrepositionsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PrepositionsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PrepositionsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
