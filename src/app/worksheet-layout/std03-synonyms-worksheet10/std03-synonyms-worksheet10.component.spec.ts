import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SynonymsWorksheet10Component } from './std03-synonyms-worksheet10.component';

describe('Std03SynonymsWorksheet10Component', () => {
  let component: Std03SynonymsWorksheet10Component;
  let fixture: ComponentFixture<Std03SynonymsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SynonymsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SynonymsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
