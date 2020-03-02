import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SubjectPredicateWorksheet8Component } from './std03-subject-predicate-worksheet8.component';

describe('Std03SubjectPredicateWorksheet8Component', () => {
  let component: Std03SubjectPredicateWorksheet8Component;
  let fixture: ComponentFixture<Std03SubjectPredicateWorksheet8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SubjectPredicateWorksheet8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SubjectPredicateWorksheet8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
