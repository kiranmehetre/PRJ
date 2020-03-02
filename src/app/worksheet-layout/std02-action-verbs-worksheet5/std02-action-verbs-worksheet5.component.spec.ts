import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ActionVerbsWorksheet5Component } from './std02-action-verbs-worksheet5.component';

describe('Std02ActionVerbsWorksheet5Component', () => {
  let component: Std02ActionVerbsWorksheet5Component;
  let fixture: ComponentFixture<Std02ActionVerbsWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ActionVerbsWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ActionVerbsWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
