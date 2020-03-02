import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedTenseWorksheet1Component } from './std01-mixed-tense-worksheet1.component';

describe('Std01MixedTenseWorksheet1Component', () => {
  let component: Std01MixedTenseWorksheet1Component;
  let fixture: ComponentFixture<Std01MixedTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
