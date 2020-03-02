import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedVerbWorksheet3Component } from './std02-mixed-verb-worksheet3.component';

describe('Std02MixedVerbWorksheet3Component', () => {
  let component: Std02MixedVerbWorksheet3Component;
  let fixture: ComponentFixture<Std02MixedVerbWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedVerbWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedVerbWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
