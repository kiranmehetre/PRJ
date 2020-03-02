import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PossessivePronounsWorksheet2Component } from './std02-possessive-pronouns-worksheet2.component';

describe('Std02PossessivePronounsWorksheet2Component', () => {
  let component: Std02PossessivePronounsWorksheet2Component;
  let fixture: ComponentFixture<Std02PossessivePronounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PossessivePronounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PossessivePronounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
