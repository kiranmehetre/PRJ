import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01FutureTenseWorksheet3Component } from './std01-future-tense-worksheet3.component';

describe('Std01FutureTenseWorksheet3Component', () => {
  let component: Std01FutureTenseWorksheet3Component;
  let fixture: ComponentFixture<Std01FutureTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01FutureTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01FutureTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
