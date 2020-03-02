import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02SynonymsWorksheet9Component } from './std02-synonyms-worksheet9.component';

describe('Std02SynonymsWorksheet9Component', () => {
  let component: Std02SynonymsWorksheet9Component;
  let fixture: ComponentFixture<Std02SynonymsWorksheet9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02SynonymsWorksheet9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02SynonymsWorksheet9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
