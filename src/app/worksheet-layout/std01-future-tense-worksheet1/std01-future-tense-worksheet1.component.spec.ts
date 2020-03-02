import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01FutureTenseWorksheet1Component } from './std01-future-tense-worksheet1.component';

describe('Std01FutureTenseWorksheet1Component', () => {
  let component: Std01FutureTenseWorksheet1Component;
  let fixture: ComponentFixture<Std01FutureTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01FutureTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01FutureTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
