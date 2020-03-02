import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01ExclamationWorksheet1Component } from './std01-exclamation-worksheet1.component';

describe('Std01ExclamationWorksheet1Component', () => {
  let component: Std01ExclamationWorksheet1Component;
  let fixture: ComponentFixture<Std01ExclamationWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01ExclamationWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01ExclamationWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
