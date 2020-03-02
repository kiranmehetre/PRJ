import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PossessivePronounsWorksheet3Component } from './std02-possessive-pronouns-worksheet3.component';

describe('Std02PossessivePronounsWorksheet3Component', () => {
  let component: Std02PossessivePronounsWorksheet3Component;
  let fixture: ComponentFixture<Std02PossessivePronounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PossessivePronounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PossessivePronounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
