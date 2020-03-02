import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03HomophonesWorksheet9Component } from './std03-homophones-worksheet9.component';

describe('Std03HomophonesWorksheet9Component', () => {
  let component: Std03HomophonesWorksheet9Component;
  let fixture: ComponentFixture<Std03HomophonesWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03HomophonesWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03HomophonesWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
