import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PrepositionsWorksheet4Component } from './std03-prepositions-worksheet4.component';

describe('Std03PrepositionsWorksheet4Component', () => {
  let component: Std03PrepositionsWorksheet4Component;
  let fixture: ComponentFixture<Std03PrepositionsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PrepositionsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PrepositionsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
