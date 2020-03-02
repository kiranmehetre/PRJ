import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SubjectPredicateWorksheet1Component } from './std03-subject-predicate-worksheet1.component';

describe('Std03SubjectPredicateWorksheet1Component', () => {
  let component: Std03SubjectPredicateWorksheet1Component;
  let fixture: ComponentFixture<Std03SubjectPredicateWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SubjectPredicateWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SubjectPredicateWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
