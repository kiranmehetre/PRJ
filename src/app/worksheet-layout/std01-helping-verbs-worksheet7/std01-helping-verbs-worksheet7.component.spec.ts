import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01HelpingVerbsWorksheet7Component } from './std01-helping-verbs-worksheet7.component';

describe('Std01HelpingVerbsWorksheet7Component', () => {
  let component: Std01HelpingVerbsWorksheet7Component;
  let fixture: ComponentFixture<Std01HelpingVerbsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01HelpingVerbsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01HelpingVerbsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
