import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SynonymsWorksheet5Component } from './std02-synonyms-worksheet5.component';

describe('Std02SynonymsWorksheet5Component', () => {
  let component: Std02SynonymsWorksheet5Component;
  let fixture: ComponentFixture<Std02SynonymsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SynonymsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SynonymsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
