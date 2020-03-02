import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SubjectPredicateWorksheet7Component } from './std03-subject-predicate-worksheet7.component';

describe('Std03SubjectPredicateWorksheet7Component', () => {
  let component: Std03SubjectPredicateWorksheet7Component;
  let fixture: ComponentFixture<Std03SubjectPredicateWorksheet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SubjectPredicateWorksheet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SubjectPredicateWorksheet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
