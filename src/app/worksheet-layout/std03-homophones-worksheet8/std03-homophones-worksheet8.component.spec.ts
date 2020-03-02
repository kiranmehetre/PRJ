import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03HomophonesWorksheet8Component } from './std03-homophones-worksheet8.component';

describe('Std03HomophonesWorksheet8Component', () => {
  let component: Std03HomophonesWorksheet8Component;
  let fixture: ComponentFixture<Std03HomophonesWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03HomophonesWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03HomophonesWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
