import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03SubjectPredicateWorksheet2Component } from './std03-subject-predicate-worksheet2.component';

describe('Std03SubjectPredicateWorksheet2Component', () => {
  let component: Std03SubjectPredicateWorksheet2Component;
  let fixture: ComponentFixture<Std03SubjectPredicateWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03SubjectPredicateWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03SubjectPredicateWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
