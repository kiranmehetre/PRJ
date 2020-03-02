import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03HomophonesWorksheet6Component } from './std03-homophones-worksheet6.component';

describe('Std03HomophonesWorksheet6Component', () => {
  let component: Std03HomophonesWorksheet6Component;
  let fixture: ComponentFixture<Std03HomophonesWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03HomophonesWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03HomophonesWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
