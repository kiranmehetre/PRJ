import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedTenseWorksheet1Component } from './std03-mixed-tense-worksheet1.component';

describe('Std03MixedTenseWorksheet1Component', () => {
  let component: Std03MixedTenseWorksheet1Component;
  let fixture: ComponentFixture<Std03MixedTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
