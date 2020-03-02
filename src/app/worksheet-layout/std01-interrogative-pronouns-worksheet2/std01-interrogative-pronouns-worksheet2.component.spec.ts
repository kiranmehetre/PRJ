import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01InterrogativePronounsWorksheet2Component } from './std01-interrogative-pronouns-worksheet2.component';

describe('Std01InterrogativePronounsWorksheet2Component', () => {
  let component: Std01InterrogativePronounsWorksheet2Component;
  let fixture: ComponentFixture<Std01InterrogativePronounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01InterrogativePronounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01InterrogativePronounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
