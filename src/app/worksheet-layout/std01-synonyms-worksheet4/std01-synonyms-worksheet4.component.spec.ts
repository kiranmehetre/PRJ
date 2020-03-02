import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01SynonymsWorksheet4Component } from './std01-synonyms-worksheet4.component';

describe('Std01SynonymsWorksheet4Component', () => {
  let component: Std01SynonymsWorksheet4Component;
  let fixture: ComponentFixture<Std01SynonymsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01SynonymsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01SynonymsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
