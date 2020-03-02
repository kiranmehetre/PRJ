import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SynonymsWorksheet2Component } from './std01-synonyms-worksheet2.component';

describe('Std01SynonymsWorksheet2Component', () => {
  let component: Std01SynonymsWorksheet2Component;
  let fixture: ComponentFixture<Std01SynonymsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SynonymsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SynonymsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
