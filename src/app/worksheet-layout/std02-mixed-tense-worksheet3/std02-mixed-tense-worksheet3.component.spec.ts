import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02MixedTenseWorksheet3Component } from './std02-mixed-tense-worksheet3.component';

describe('Std02MixedTenseWorksheet3Component', () => {
  let component: Std02MixedTenseWorksheet3Component;
  let fixture: ComponentFixture<Std02MixedTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02MixedTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02MixedTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
