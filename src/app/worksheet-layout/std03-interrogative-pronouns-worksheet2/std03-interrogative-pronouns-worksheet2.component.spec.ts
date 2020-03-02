import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03InterrogativePronounsWorksheet2Component } from './std03-interrogative-pronouns-worksheet2.component';

describe('Std03InterrogativePronounsWorksheet2Component', () => {
  let component: Std03InterrogativePronounsWorksheet2Component;
  let fixture: ComponentFixture<Std03InterrogativePronounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03InterrogativePronounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03InterrogativePronounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
