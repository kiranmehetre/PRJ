import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ActionVerbWorksheet4Component } from './std01-action-verb-worksheet4.component';

describe('Std01ActionVerbWorksheet4Component', () => {
  let component: Std01ActionVerbWorksheet4Component;
  let fixture: ComponentFixture<Std01ActionVerbWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ActionVerbWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ActionVerbWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
