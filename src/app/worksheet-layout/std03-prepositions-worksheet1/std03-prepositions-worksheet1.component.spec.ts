import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PrepositionsWorksheet1Component } from './std03-prepositions-worksheet1.component';

describe('Std03PrepositionsWorksheet1Component', () => {
  let component: Std03PrepositionsWorksheet1Component;
  let fixture: ComponentFixture<Std03PrepositionsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PrepositionsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PrepositionsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
