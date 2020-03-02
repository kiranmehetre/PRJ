import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01HelpingVerbsWorksheet6Component } from './std01-helping-verbs-worksheet6.component';

describe('Std01HelpingVerbsWorksheet6Component', () => {
  let component: Std01HelpingVerbsWorksheet6Component;
  let fixture: ComponentFixture<Std01HelpingVerbsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01HelpingVerbsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01HelpingVerbsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
