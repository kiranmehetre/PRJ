import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ActionVerbWorksheet1Component } from './std01-action-verb-worksheet1.component';

describe('Std01ActionVerbWorksheet1Component', () => {
  let component: Std01ActionVerbWorksheet1Component;
  let fixture: ComponentFixture<Std01ActionVerbWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ActionVerbWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ActionVerbWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
