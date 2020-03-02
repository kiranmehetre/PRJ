import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PresentTenseWorksheet1Component } from './std01-present-tense-worksheet1.component';

describe('Std01PresentTenseWorksheet1Component', () => {
  let component: Std01PresentTenseWorksheet1Component;
  let fixture: ComponentFixture<Std01PresentTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PresentTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PresentTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
