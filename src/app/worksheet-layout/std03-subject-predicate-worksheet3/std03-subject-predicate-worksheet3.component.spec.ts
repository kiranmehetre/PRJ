import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SubjectPredicateWorksheet3Component } from './std03-subject-predicate-worksheet3.component';

describe('Std03SubjectPredicateWorksheet3Component', () => {
  let component: Std03SubjectPredicateWorksheet3Component;
  let fixture: ComponentFixture<Std03SubjectPredicateWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SubjectPredicateWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SubjectPredicateWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
