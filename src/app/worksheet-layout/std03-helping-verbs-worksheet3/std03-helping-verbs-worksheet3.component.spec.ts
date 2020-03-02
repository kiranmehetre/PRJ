import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03HelpingVerbsWorksheet3Component } from './std03-helping-verbs-worksheet3.component';

describe('Std03HelpingVerbsWorksheet3Component', () => {
  let component: Std03HelpingVerbsWorksheet3Component;
  let fixture: ComponentFixture<Std03HelpingVerbsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03HelpingVerbsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03HelpingVerbsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
