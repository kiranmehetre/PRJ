import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02HelpingVerbsWorksheet4Component } from './std02-helping-verbs-worksheet4.component';

describe('Std02HelpingVerbsWorksheet4Component', () => {
  let component: Std02HelpingVerbsWorksheet4Component;
  let fixture: ComponentFixture<Std02HelpingVerbsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02HelpingVerbsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02HelpingVerbsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
