import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ActionVerbWorksheet2Component } from './std01-action-verb-worksheet2.component';

describe('Std01ActionVerbWorksheet2Component', () => {
  let component: Std01ActionVerbWorksheet2Component;
  let fixture: ComponentFixture<Std01ActionVerbWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ActionVerbWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ActionVerbWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
