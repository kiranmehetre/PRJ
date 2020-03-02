import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03FutureTenseWorksheet3Component } from './std03-future-tense-worksheet3.component';

describe('Std03FutureTenseWorksheet3Component', () => {
  let component: Std03FutureTenseWorksheet3Component;
  let fixture: ComponentFixture<Std03FutureTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03FutureTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03FutureTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
