import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SynonymsWorksheet1Component } from './std02-synonyms-worksheet1.component';

describe('Std02SynonymsWorksheet1Component', () => {
  let component: Std02SynonymsWorksheet1Component;
  let fixture: ComponentFixture<Std02SynonymsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SynonymsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SynonymsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
