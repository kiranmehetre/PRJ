import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedTenseWorksheet2Component } from './std02-mixed-tense-worksheet2.component';

describe('Std02MixedTenseWorksheet2Component', () => {
  let component: Std02MixedTenseWorksheet2Component;
  let fixture: ComponentFixture<Std02MixedTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
