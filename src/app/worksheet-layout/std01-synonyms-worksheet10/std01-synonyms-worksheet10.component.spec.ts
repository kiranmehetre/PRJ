import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SynonymsWorksheet10Component } from './std01-synonyms-worksheet10.component';

describe('Std01SynonymsWorksheet10Component', () => {
  let component: Std01SynonymsWorksheet10Component;
  let fixture: ComponentFixture<Std01SynonymsWorksheet10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SynonymsWorksheet10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SynonymsWorksheet10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
