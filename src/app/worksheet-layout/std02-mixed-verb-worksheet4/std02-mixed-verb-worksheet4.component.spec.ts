import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedVerbWorksheet4Component } from './std02-mixed-verb-worksheet4.component';

describe('Std02MixedVerbWorksheet4Component', () => {
  let component: Std02MixedVerbWorksheet4Component;
  let fixture: ComponentFixture<Std02MixedVerbWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedVerbWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedVerbWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
