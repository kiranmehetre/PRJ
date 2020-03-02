import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02HomophonesWorksheet3Component } from './std02-homophones-worksheet3.component';

describe('Std02HomophonesWorksheet3Component', () => {
  let component: Std02HomophonesWorksheet3Component;
  let fixture: ComponentFixture<Std02HomophonesWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02HomophonesWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02HomophonesWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
