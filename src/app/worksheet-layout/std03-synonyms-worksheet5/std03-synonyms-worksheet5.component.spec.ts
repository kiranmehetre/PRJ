import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SynonymsWorksheet5Component } from './std03-synonyms-worksheet5.component';

describe('Std03SynonymsWorksheet5Component', () => {
  let component: Std03SynonymsWorksheet5Component;
  let fixture: ComponentFixture<Std03SynonymsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SynonymsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SynonymsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
