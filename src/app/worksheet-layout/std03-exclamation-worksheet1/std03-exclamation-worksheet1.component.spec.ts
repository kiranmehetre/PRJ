import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ExclamationWorksheet1Component } from './std03-exclamation-worksheet1.component';

describe('Std03ExclamationWorksheet1Component', () => {
  let component: Std03ExclamationWorksheet1Component;
  let fixture: ComponentFixture<Std03ExclamationWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ExclamationWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ExclamationWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
