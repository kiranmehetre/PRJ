import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PossessivePronounsWorksheet1Component } from './std03-possessive-pronouns-worksheet1.component';

describe('Std03PossessivePronounsWorksheet1Component', () => {
  let component: Std03PossessivePronounsWorksheet1Component;
  let fixture: ComponentFixture<Std03PossessivePronounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PossessivePronounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PossessivePronounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
