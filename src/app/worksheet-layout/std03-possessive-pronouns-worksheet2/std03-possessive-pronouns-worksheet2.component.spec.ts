import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03PossessivePronounsWorksheet2Component } from './std03-possessive-pronouns-worksheet2.component';

describe('Std03PossessivePronounsWorksheet2Component', () => {
  let component: Std03PossessivePronounsWorksheet2Component;
  let fixture: ComponentFixture<Std03PossessivePronounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03PossessivePronounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03PossessivePronounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
