import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ActionVerbWorksheet5Component } from './std01-action-verb-worksheet5.component';

describe('Std01ActionVerbWorksheet5Component', () => {
  let component: Std01ActionVerbWorksheet5Component;
  let fixture: ComponentFixture<Std01ActionVerbWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ActionVerbWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ActionVerbWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
