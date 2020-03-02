import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02InterrogativePronounsWorksheet4Component } from './std02-interrogative-pronouns-worksheet4.component';

describe('Std02InterrogativePronounsWorksheet4Component', () => {
  let component: Std02InterrogativePronounsWorksheet4Component;
  let fixture: ComponentFixture<Std02InterrogativePronounsWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02InterrogativePronounsWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02InterrogativePronounsWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
