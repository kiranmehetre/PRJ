import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ConjunctionsWorksheet6Component } from './std01-conjunctions-worksheet6.component';

describe('Std01ConjunctionsWorksheet6Component', () => {
  let component: Std01ConjunctionsWorksheet6Component;
  let fixture: ComponentFixture<Std01ConjunctionsWorksheet6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ConjunctionsWorksheet6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ConjunctionsWorksheet6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
