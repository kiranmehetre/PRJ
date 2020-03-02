import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02HelpingVerbsWorksheet1Component } from './std02-helping-verbs-worksheet1.component';

describe('Std02HelpingVerbsWorksheet1Component', () => {
  let component: Std02HelpingVerbsWorksheet1Component;
  let fixture: ComponentFixture<Std02HelpingVerbsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02HelpingVerbsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02HelpingVerbsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
