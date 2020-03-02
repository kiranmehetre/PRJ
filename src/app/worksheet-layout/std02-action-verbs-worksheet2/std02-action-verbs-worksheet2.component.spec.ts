import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ActionVerbsWorksheet2Component } from './std02-action-verbs-worksheet2.component';

describe('Std02ActionVerbsWorksheet2Component', () => {
  let component: Std02ActionVerbsWorksheet2Component;
  let fixture: ComponentFixture<Std02ActionVerbsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ActionVerbsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ActionVerbsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
