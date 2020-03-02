import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedVerbWorksheet5Component } from './std02-mixed-verb-worksheet5.component';

describe('Std02MixedVerbWorksheet5Component', () => {
  let component: Std02MixedVerbWorksheet5Component;
  let fixture: ComponentFixture<Std02MixedVerbWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedVerbWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedVerbWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
