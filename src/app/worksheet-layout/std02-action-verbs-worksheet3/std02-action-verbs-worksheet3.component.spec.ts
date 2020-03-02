import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ActionVerbsWorksheet3Component } from './std02-action-verbs-worksheet3.component';

describe('Std02ActionVerbsWorksheet3Component', () => {
  let component: Std02ActionVerbsWorksheet3Component;
  let fixture: ComponentFixture<Std02ActionVerbsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ActionVerbsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ActionVerbsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
