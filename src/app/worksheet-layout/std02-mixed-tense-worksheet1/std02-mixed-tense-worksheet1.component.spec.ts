import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedTenseWorksheet1Component } from './std02-mixed-tense-worksheet1.component';

describe('Std02MixedTenseWorksheet1Component', () => {
  let component: Std02MixedTenseWorksheet1Component;
  let fixture: ComponentFixture<Std02MixedTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
