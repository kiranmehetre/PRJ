import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03HomophonesWorksheet7Component } from './std03-homophones-worksheet7.component';

describe('Std03HomophonesWorksheet7Component', () => {
  let component: Std03HomophonesWorksheet7Component;
  let fixture: ComponentFixture<Std03HomophonesWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03HomophonesWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03HomophonesWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
