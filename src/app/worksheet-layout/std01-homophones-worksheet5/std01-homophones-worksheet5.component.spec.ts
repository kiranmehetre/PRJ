import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01HomophonesWorksheet5Component } from './std01-homophones-worksheet5.component';

describe('Std01HomophonesWorksheet5Component', () => {
  let component: Std01HomophonesWorksheet5Component;
  let fixture: ComponentFixture<Std01HomophonesWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01HomophonesWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01HomophonesWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
