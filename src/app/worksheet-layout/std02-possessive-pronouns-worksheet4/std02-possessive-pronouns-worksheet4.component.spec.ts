import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PossessivePronounsWorksheet4Component } from './std02-possessive-pronouns-worksheet4.component';

describe('Std02PossessivePronounsWorksheet4Component', () => {
  let component: Std02PossessivePronounsWorksheet4Component;
  let fixture: ComponentFixture<Std02PossessivePronounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PossessivePronounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PossessivePronounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
