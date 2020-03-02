import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03HelpingVerbsWorksheet4Component } from './std03-helping-verbs-worksheet4.component';

describe('Std03HelpingVerbsWorksheet4Component', () => {
  let component: Std03HelpingVerbsWorksheet4Component;
  let fixture: ComponentFixture<Std03HelpingVerbsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03HelpingVerbsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03HelpingVerbsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
