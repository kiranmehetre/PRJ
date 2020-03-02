import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02HelpingVerbsWorksheet5Component } from './std02-helping-verbs-worksheet5.component';

describe('Std02HelpingVerbsWorksheet5Component', () => {
  let component: Std02HelpingVerbsWorksheet5Component;
  let fixture: ComponentFixture<Std02HelpingVerbsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02HelpingVerbsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02HelpingVerbsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
