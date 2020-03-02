import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SubjectPredicateWorksheet6Component } from './std03-subject-predicate-worksheet6.component';

describe('Std03SubjectPredicateWorksheet6Component', () => {
  let component: Std03SubjectPredicateWorksheet6Component;
  let fixture: ComponentFixture<Std03SubjectPredicateWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SubjectPredicateWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SubjectPredicateWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
