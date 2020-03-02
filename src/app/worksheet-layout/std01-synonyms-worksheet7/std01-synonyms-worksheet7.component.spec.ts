import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SynonymsWorksheet7Component } from './std01-synonyms-worksheet7.component';

describe('Std01SynonymsWorksheet7Component', () => {
  let component: Std01SynonymsWorksheet7Component;
  let fixture: ComponentFixture<Std01SynonymsWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SynonymsWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SynonymsWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
