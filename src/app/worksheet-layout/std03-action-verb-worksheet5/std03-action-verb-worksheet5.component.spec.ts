import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ActionVerbWorksheet5Component } from './std03-action-verb-worksheet5.component';

describe('Std03ActionVerbWorksheet5Component', () => {
  let component: Std03ActionVerbWorksheet5Component;
  let fixture: ComponentFixture<Std03ActionVerbWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ActionVerbWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ActionVerbWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
