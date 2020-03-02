import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedVerbWorksheet1Component } from './std02-mixed-verb-worksheet1.component';

describe('Std02MixedVerbWorksheet1Component', () => {
  let component: Std02MixedVerbWorksheet1Component;
  let fixture: ComponentFixture<Std02MixedVerbWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedVerbWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedVerbWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
