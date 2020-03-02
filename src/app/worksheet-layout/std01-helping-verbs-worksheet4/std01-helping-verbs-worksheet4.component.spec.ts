import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01HelpingVerbsWorksheet4Component } from './std01-helping-verbs-worksheet4.component';

describe('Std01HelpingVerbsWorksheet4Component', () => {
  let component: Std01HelpingVerbsWorksheet4Component;
  let fixture: ComponentFixture<Std01HelpingVerbsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01HelpingVerbsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01HelpingVerbsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
