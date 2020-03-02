import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02HomophonesWorksheet2Component } from './std02-homophones-worksheet2.component';

describe('Std02HomophonesWorksheet2Component', () => {
  let component: Std02HomophonesWorksheet2Component;
  let fixture: ComponentFixture<Std02HomophonesWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02HomophonesWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02HomophonesWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
