import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PossessivePronounsWorksheet1Component } from './std02-possessive-pronouns-worksheet1.component';

describe('Std02PossessivePronounsWorksheet1Component', () => {
  let component: Std02PossessivePronounsWorksheet1Component;
  let fixture: ComponentFixture<Std02PossessivePronounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PossessivePronounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PossessivePronounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
