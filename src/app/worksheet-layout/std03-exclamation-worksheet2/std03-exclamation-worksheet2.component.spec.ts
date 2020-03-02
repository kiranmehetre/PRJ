import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ExclamationWorksheet2Component } from './std03-exclamation-worksheet2.component';

describe('Std03ExclamationWorksheet2Component', () => {
  let component: Std03ExclamationWorksheet2Component;
  let fixture: ComponentFixture<Std03ExclamationWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ExclamationWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ExclamationWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
