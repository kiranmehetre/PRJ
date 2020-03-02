import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ActionVerbsWorksheet1Component } from './std02-action-verbs-worksheet1.component';

describe('Std02ActionVerbsWorksheet1Component', () => {
  let component: Std02ActionVerbsWorksheet1Component;
  let fixture: ComponentFixture<Std02ActionVerbsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ActionVerbsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ActionVerbsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
