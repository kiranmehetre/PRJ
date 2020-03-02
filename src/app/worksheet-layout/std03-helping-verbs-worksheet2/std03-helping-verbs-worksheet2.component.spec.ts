import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03HelpingVerbsWorksheet2Component } from './std03-helping-verbs-worksheet2.component';

describe('Std03HelpingVerbsWorksheet2Component', () => {
  let component: Std03HelpingVerbsWorksheet2Component;
  let fixture: ComponentFixture<Std03HelpingVerbsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03HelpingVerbsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03HelpingVerbsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
