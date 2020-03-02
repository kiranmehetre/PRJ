import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ActionVerbWorksheet2Component } from './std03-action-verb-worksheet2.component';

describe('Std03ActionVerbWorksheet2Component', () => {
  let component: Std03ActionVerbWorksheet2Component;
  let fixture: ComponentFixture<Std03ActionVerbWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ActionVerbWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ActionVerbWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
