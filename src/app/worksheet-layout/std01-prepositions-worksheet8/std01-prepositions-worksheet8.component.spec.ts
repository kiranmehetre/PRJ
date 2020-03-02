import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PrepositionsWorksheet8Component } from './std01-prepositions-worksheet8.component';

describe('Std01PrepositionsWorksheet8Component', () => {
  let component: Std01PrepositionsWorksheet8Component;
  let fixture: ComponentFixture<Std01PrepositionsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PrepositionsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PrepositionsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
