import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ReflexivePronounsWorksheet1Component } from './std03-reflexive-pronouns-worksheet1.component';

describe('Std03ReflexivePronounsWorksheet1Component', () => {
  let component: Std03ReflexivePronounsWorksheet1Component;
  let fixture: ComponentFixture<Std03ReflexivePronounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ReflexivePronounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ReflexivePronounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
