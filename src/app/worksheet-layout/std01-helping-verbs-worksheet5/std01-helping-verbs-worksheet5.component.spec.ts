import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01HelpingVerbsWorksheet5Component } from './std01-helping-verbs-worksheet5.component';

describe('Std01HelpingVerbsWorksheet5Component', () => {
  let component: Std01HelpingVerbsWorksheet5Component;
  let fixture: ComponentFixture<Std01HelpingVerbsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01HelpingVerbsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01HelpingVerbsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
