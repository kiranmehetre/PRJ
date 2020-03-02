import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PossessivePronounsWorksheet2Component } from './std01-possessive-pronouns-worksheet2.component';

describe('Std01PossessivePronounsWorksheet2Component', () => {
  let component: Std01PossessivePronounsWorksheet2Component;
  let fixture: ComponentFixture<Std01PossessivePronounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PossessivePronounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PossessivePronounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
