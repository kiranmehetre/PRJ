import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01HomophonesWorksheet4Component } from './std01-homophones-worksheet4.component';

describe('Std01HomophonesWorksheet4Component', () => {
  let component: Std01HomophonesWorksheet4Component;
  let fixture: ComponentFixture<Std01HomophonesWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01HomophonesWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01HomophonesWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
