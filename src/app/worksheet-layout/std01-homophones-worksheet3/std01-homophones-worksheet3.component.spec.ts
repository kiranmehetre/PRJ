import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01HomophonesWorksheet3Component } from './std01-homophones-worksheet3.component';

describe('Std01HomophonesWorksheet3Component', () => {
  let component: Std01HomophonesWorksheet3Component;
  let fixture: ComponentFixture<Std01HomophonesWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01HomophonesWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01HomophonesWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
