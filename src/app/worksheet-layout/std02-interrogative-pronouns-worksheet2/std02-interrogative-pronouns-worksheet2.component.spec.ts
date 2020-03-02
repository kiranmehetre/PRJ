import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02InterrogativePronounsWorksheet2Component } from './std02-interrogative-pronouns-worksheet2.component';

describe('Std02InterrogativePronounsWorksheet2Component', () => {
  let component: Std02InterrogativePronounsWorksheet2Component;
  let fixture: ComponentFixture<Std02InterrogativePronounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02InterrogativePronounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02InterrogativePronounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
