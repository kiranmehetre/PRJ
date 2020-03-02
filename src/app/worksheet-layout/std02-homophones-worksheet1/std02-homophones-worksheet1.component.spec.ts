import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02HomophonesWorksheet1Component } from './std02-homophones-worksheet1.component';

describe('Std02HomophonesWorksheet1Component', () => {
  let component: Std02HomophonesWorksheet1Component;
  let fixture: ComponentFixture<Std02HomophonesWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02HomophonesWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02HomophonesWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
