import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ActionVerbWorksheet1Component } from './std03-action-verb-worksheet1.component';

describe('Std03ActionVerbWorksheet1Component', () => {
  let component: Std03ActionVerbWorksheet1Component;
  let fixture: ComponentFixture<Std03ActionVerbWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ActionVerbWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ActionVerbWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
