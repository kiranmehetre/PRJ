import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02FutureTenseWorksheet1Component } from './std02-future-tense-worksheet1.component';

describe('Std02FutureTenseWorksheet1Component', () => {
  let component: Std02FutureTenseWorksheet1Component;
  let fixture: ComponentFixture<Std02FutureTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02FutureTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02FutureTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
