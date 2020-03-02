import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PrepositionsWorksheet10Component } from './std01-prepositions-worksheet10.component';

describe('Std01PrepositionsWorksheet10Component', () => {
  let component: Std01PrepositionsWorksheet10Component;
  let fixture: ComponentFixture<Std01PrepositionsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PrepositionsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PrepositionsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
