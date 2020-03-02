import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ConjunctionsWorksheet2Component } from './std01-conjunctions-worksheet2.component';

describe('Std01ConjunctionsWorksheet2Component', () => {
  let component: Std01ConjunctionsWorksheet2Component;
  let fixture: ComponentFixture<Std01ConjunctionsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ConjunctionsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ConjunctionsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
