import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PrepositionsWorksheet3Component } from './std01-prepositions-worksheet3.component';

describe('Std01PrepositionsWorksheet3Component', () => {
  let component: Std01PrepositionsWorksheet3Component;
  let fixture: ComponentFixture<Std01PrepositionsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PrepositionsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PrepositionsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
