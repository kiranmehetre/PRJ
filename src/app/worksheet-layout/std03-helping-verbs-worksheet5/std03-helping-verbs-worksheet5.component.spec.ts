import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03HelpingVerbsWorksheet5Component } from './std03-helping-verbs-worksheet5.component';

describe('Std03HelpingVerbsWorksheet5Component', () => {
  let component: Std03HelpingVerbsWorksheet5Component;
  let fixture: ComponentFixture<Std03HelpingVerbsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03HelpingVerbsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03HelpingVerbsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
