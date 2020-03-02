import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PrepositionsWorksheet8Component } from './std02-prepositions-worksheet8.component';

describe('Std02PrepositionsWorksheet8Component', () => {
  let component: Std02PrepositionsWorksheet8Component;
  let fixture: ComponentFixture<Std02PrepositionsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PrepositionsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PrepositionsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
