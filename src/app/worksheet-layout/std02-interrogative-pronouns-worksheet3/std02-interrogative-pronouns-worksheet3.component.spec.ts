import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02InterrogativePronounsWorksheet3Component } from './std02-interrogative-pronouns-worksheet3.component';

describe('Std02InterrogativePronounsWorksheet3Component', () => {
  let component: Std02InterrogativePronounsWorksheet3Component;
  let fixture: ComponentFixture<Std02InterrogativePronounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02InterrogativePronounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02InterrogativePronounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
