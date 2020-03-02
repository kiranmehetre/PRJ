import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01FutureTenseWorksheet2Component } from './std01-future-tense-worksheet2.component';

describe('Std01FutureTenseWorksheet2Component', () => {
  let component: Std01FutureTenseWorksheet2Component;
  let fixture: ComponentFixture<Std01FutureTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01FutureTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01FutureTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
