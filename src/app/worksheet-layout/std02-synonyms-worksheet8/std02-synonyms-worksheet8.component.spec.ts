import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SynonymsWorksheet8Component } from './std02-synonyms-worksheet8.component';

describe('Std02SynonymsWorksheet8Component', () => {
  let component: Std02SynonymsWorksheet8Component;
  let fixture: ComponentFixture<Std02SynonymsWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SynonymsWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SynonymsWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
