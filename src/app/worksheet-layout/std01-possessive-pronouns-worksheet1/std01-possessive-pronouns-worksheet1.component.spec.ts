import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PossessivePronounsWorksheet1Component } from './std01-possessive-pronouns-worksheet1.component';

describe('Std01PossessivePronounsWorksheet1Component', () => {
  let component: Std01PossessivePronounsWorksheet1Component;
  let fixture: ComponentFixture<Std01PossessivePronounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PossessivePronounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PossessivePronounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
