import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02FutureTenseWorksheet2Component } from './std02-future-tense-worksheet2.component';

describe('Std02FutureTenseWorksheet2Component', () => {
  let component: Std02FutureTenseWorksheet2Component;
  let fixture: ComponentFixture<Std02FutureTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02FutureTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02FutureTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
