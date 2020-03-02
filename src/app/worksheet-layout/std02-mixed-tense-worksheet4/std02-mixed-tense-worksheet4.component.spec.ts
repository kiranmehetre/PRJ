import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedTenseWorksheet4Component } from './std02-mixed-tense-worksheet4.component';

describe('Std02MixedTenseWorksheet4Component', () => {
  let component: Std02MixedTenseWorksheet4Component;
  let fixture: ComponentFixture<Std02MixedTenseWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedTenseWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedTenseWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
