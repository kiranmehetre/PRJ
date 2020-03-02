import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03ReflexivePronounsWorksheet2Component } from './std03-reflexive-pronouns-worksheet2.component';

describe('Std03ReflexivePronounsWorksheet2Component', () => {
  let component: Std03ReflexivePronounsWorksheet2Component;
  let fixture: ComponentFixture<Std03ReflexivePronounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03ReflexivePronounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03ReflexivePronounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
