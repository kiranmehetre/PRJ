import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01HelpingVerbsWorksheet8Component } from './std01-helping-verbs-worksheet8.component';

describe('Std01HelpingVerbsWorksheet8Component', () => {
  let component: Std01HelpingVerbsWorksheet8Component;
  let fixture: ComponentFixture<Std01HelpingVerbsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01HelpingVerbsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01HelpingVerbsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
