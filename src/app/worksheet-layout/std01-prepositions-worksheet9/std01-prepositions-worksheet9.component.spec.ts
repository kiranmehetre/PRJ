import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PrepositionsWorksheet9Component } from './std01-prepositions-worksheet9.component';

describe('Std01PrepositionsWorksheet9Component', () => {
  let component: Std01PrepositionsWorksheet9Component;
  let fixture: ComponentFixture<Std01PrepositionsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PrepositionsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PrepositionsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
