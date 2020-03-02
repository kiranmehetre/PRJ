import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SynonymsWorksheet7Component } from './std03-synonyms-worksheet7.component';

describe('Std03SynonymsWorksheet7Component', () => {
  let component: Std03SynonymsWorksheet7Component;
  let fixture: ComponentFixture<Std03SynonymsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SynonymsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SynonymsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
