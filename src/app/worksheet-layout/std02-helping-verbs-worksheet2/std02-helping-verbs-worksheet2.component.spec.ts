import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02HelpingVerbsWorksheet2Component } from './std02-helping-verbs-worksheet2.component';

describe('Std02HelpingVerbsWorksheet2Component', () => {
  let component: Std02HelpingVerbsWorksheet2Component;
  let fixture: ComponentFixture<Std02HelpingVerbsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02HelpingVerbsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02HelpingVerbsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
