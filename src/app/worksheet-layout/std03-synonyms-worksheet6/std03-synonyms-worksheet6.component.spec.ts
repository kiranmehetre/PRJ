import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SynonymsWorksheet6Component } from './std03-synonyms-worksheet6.component';

describe('Std03SynonymsWorksheet6Component', () => {
  let component: Std03SynonymsWorksheet6Component;
  let fixture: ComponentFixture<Std03SynonymsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SynonymsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SynonymsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
