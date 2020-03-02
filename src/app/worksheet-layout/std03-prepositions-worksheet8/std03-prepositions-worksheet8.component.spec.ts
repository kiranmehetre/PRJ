import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PrepositionsWorksheet8Component } from './std03-prepositions-worksheet8.component';

describe('Std03PrepositionsWorksheet8Component', () => {
  let component: Std03PrepositionsWorksheet8Component;
  let fixture: ComponentFixture<Std03PrepositionsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PrepositionsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PrepositionsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
