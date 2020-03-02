import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03HelpingVerbsWorksheet1Component } from './std03-helping-verbs-worksheet1.component';

describe('Std03HelpingVerbsWorksheet1Component', () => {
  let component: Std03HelpingVerbsWorksheet1Component;
  let fixture: ComponentFixture<Std03HelpingVerbsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03HelpingVerbsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03HelpingVerbsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
