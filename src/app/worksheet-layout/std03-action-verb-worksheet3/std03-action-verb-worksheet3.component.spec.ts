import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ActionVerbWorksheet3Component } from './std03-action-verb-worksheet3.component';

describe('Std03ActionVerbWorksheet3Component', () => {
  let component: Std03ActionVerbWorksheet3Component;
  let fixture: ComponentFixture<Std03ActionVerbWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ActionVerbWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ActionVerbWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
