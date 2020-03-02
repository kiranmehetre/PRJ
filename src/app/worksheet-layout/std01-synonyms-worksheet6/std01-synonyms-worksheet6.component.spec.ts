import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SynonymsWorksheet6Component } from './std01-synonyms-worksheet6.component';

describe('Std01SynonymsWorksheet6Component', () => {
  let component: Std01SynonymsWorksheet6Component;
  let fixture: ComponentFixture<Std01SynonymsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SynonymsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SynonymsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
