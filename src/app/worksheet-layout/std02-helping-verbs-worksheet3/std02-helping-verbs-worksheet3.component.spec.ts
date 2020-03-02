import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02HelpingVerbsWorksheet3Component } from './std02-helping-verbs-worksheet3.component';

describe('Std02HelpingVerbsWorksheet3Component', () => {
  let component: Std02HelpingVerbsWorksheet3Component;
  let fixture: ComponentFixture<Std02HelpingVerbsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02HelpingVerbsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02HelpingVerbsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
