import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02FutureTenseWorksheet3Component } from './std02-future-tense-worksheet3.component';

describe('Std02FutureTenseWorksheet3Component', () => {
  let component: Std02FutureTenseWorksheet3Component;
  let fixture: ComponentFixture<Std02FutureTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02FutureTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02FutureTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
