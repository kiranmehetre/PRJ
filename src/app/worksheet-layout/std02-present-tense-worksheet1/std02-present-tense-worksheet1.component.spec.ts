import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PresentTenseWorksheet1Component } from './std02-present-tense-worksheet1.component';

describe('Std02PresentTenseWorksheet1Component', () => {
  let component: Std02PresentTenseWorksheet1Component;
  let fixture: ComponentFixture<Std02PresentTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PresentTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PresentTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
