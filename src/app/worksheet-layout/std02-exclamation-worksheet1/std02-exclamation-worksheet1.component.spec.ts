import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ExclamationWorksheet1Component } from './std02-exclamation-worksheet1.component';

describe('Std02ExclamationWorksheet1Component', () => {
  let component: Std02ExclamationWorksheet1Component;
  let fixture: ComponentFixture<Std02ExclamationWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ExclamationWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ExclamationWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
