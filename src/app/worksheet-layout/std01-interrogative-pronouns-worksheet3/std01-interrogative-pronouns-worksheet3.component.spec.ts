import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01InterrogativePronounsWorksheet3Component } from './std01-interrogative-pronouns-worksheet3.component';

describe('Std01InterrogativePronounsWorksheet3Component', () => {
  let component: Std01InterrogativePronounsWorksheet3Component;
  let fixture: ComponentFixture<Std01InterrogativePronounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01InterrogativePronounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01InterrogativePronounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
