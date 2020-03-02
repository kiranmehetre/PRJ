import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03FutureTenseWorksheet1Component } from './std03-future-tense-worksheet1.component';

describe('Std03FutureTenseWorksheet1Component', () => {
  let component: Std03FutureTenseWorksheet1Component;
  let fixture: ComponentFixture<Std03FutureTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03FutureTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03FutureTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
