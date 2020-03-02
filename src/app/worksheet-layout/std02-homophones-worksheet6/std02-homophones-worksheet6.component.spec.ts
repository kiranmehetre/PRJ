import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02HomophonesWorksheet6Component } from './std02-homophones-worksheet6.component';

describe('Std02HomophonesWorksheet6Component', () => {
  let component: Std02HomophonesWorksheet6Component;
  let fixture: ComponentFixture<Std02HomophonesWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02HomophonesWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02HomophonesWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
