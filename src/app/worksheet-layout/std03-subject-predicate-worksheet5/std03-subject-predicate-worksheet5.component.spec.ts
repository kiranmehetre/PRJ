import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SubjectPredicateWorksheet5Component } from './std03-subject-predicate-worksheet5.component';

describe('Std03SubjectPredicateWorksheet5Component', () => {
  let component: Std03SubjectPredicateWorksheet5Component;
  let fixture: ComponentFixture<Std03SubjectPredicateWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SubjectPredicateWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SubjectPredicateWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
