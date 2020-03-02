import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ActionVerbWorksheet4Component } from './std03-action-verb-worksheet4.component';

describe('Std03ActionVerbWorksheet4Component', () => {
  let component: Std03ActionVerbWorksheet4Component;
  let fixture: ComponentFixture<Std03ActionVerbWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ActionVerbWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ActionVerbWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
