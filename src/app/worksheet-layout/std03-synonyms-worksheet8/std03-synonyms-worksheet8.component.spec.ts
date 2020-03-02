import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SynonymsWorksheet8Component } from './std03-synonyms-worksheet8.component';

describe('Std03SynonymsWorksheet8Component', () => {
  let component: Std03SynonymsWorksheet8Component;
  let fixture: ComponentFixture<Std03SynonymsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SynonymsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SynonymsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
