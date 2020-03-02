import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01HomophonesWorksheet2Component } from './std01-homophones-worksheet2.component';

describe('Std01HomophonesWorksheet2Component', () => {
  let component: Std01HomophonesWorksheet2Component;
  let fixture: ComponentFixture<Std01HomophonesWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01HomophonesWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01HomophonesWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
