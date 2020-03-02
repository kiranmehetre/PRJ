import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PrepositionsWorksheet9Component } from './std03-prepositions-worksheet9.component';

describe('Std03PrepositionsWorksheet9Component', () => {
  let component: Std03PrepositionsWorksheet9Component;
  let fixture: ComponentFixture<Std03PrepositionsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PrepositionsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PrepositionsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
