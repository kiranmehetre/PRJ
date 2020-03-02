import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SynonymsWorksheet3Component } from './std02-synonyms-worksheet3.component';

describe('Std02SynonymsWorksheet3Component', () => {
  let component: Std02SynonymsWorksheet3Component;
  let fixture: ComponentFixture<Std02SynonymsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SynonymsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SynonymsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
