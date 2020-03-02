import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PossessivePronounsWorksheet3Component } from './std01-possessive-pronouns-worksheet3.component';

describe('Std01PossessivePronounsWorksheet3Component', () => {
  let component: Std01PossessivePronounsWorksheet3Component;
  let fixture: ComponentFixture<Std01PossessivePronounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PossessivePronounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PossessivePronounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
