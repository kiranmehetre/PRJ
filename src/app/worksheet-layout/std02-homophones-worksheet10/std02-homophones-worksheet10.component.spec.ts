import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02HomophonesWorksheet10Component } from './std02-homophones-worksheet10.component';

describe('Std02HomophonesWorksheet10Component', () => {
  let component: Std02HomophonesWorksheet10Component;
  let fixture: ComponentFixture<Std02HomophonesWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02HomophonesWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02HomophonesWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
