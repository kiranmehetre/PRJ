import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03FutureTenseWorksheet2Component } from './std03-future-tense-worksheet2.component';

describe('Std03FutureTenseWorksheet2Component', () => {
  let component: Std03FutureTenseWorksheet2Component;
  let fixture: ComponentFixture<Std03FutureTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03FutureTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03FutureTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
