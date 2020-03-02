import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ConjunctionsWorksheet4Component } from './std01-conjunctions-worksheet4.component';

describe('Std01ConjunctionsWorksheet4Component', () => {
  let component: Std01ConjunctionsWorksheet4Component;
  let fixture: ComponentFixture<Std01ConjunctionsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ConjunctionsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ConjunctionsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
