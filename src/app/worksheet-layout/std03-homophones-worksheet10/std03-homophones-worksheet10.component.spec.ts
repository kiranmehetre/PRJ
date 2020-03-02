import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03HomophonesWorksheet10Component } from './std03-homophones-worksheet10.component';

describe('Std03HomophonesWorksheet10Component', () => {
  let component: Std03HomophonesWorksheet10Component;
  let fixture: ComponentFixture<Std03HomophonesWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03HomophonesWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03HomophonesWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
