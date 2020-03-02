import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ActionVerbWorksheet3Component } from './std01-action-verb-worksheet3.component';

describe('Std01ActionVerbWorksheet3Component', () => {
  let component: Std01ActionVerbWorksheet3Component;
  let fixture: ComponentFixture<Std01ActionVerbWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ActionVerbWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ActionVerbWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
