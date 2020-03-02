import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01HomophonesWorksheet7Component } from './std01-homophones-worksheet7.component';

describe('Std01HomophonesWorksheet7Component', () => {
  let component: Std01HomophonesWorksheet7Component;
  let fixture: ComponentFixture<Std01HomophonesWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01HomophonesWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01HomophonesWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
