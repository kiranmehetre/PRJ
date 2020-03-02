import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PrepositionsWorksheet5Component } from './std01-prepositions-worksheet5.component';

describe('Std01PrepositionsWorksheet5Component', () => {
  let component: Std01PrepositionsWorksheet5Component;
  let fixture: ComponentFixture<Std01PrepositionsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PrepositionsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PrepositionsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
