import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedVerbWorksheet2Component } from './std02-mixed-verb-worksheet2.component';

describe('Std02MixedVerbWorksheet2Component', () => {
  let component: Std02MixedVerbWorksheet2Component;
  let fixture: ComponentFixture<Std02MixedVerbWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedVerbWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedVerbWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
