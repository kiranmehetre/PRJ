import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedVerbWorksheet1Component } from './std03-mixed-verb-worksheet1.component';

describe('Std03MixedVerbWorksheet1Component', () => {
  let component: Std03MixedVerbWorksheet1Component;
  let fixture: ComponentFixture<Std03MixedVerbWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedVerbWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedVerbWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
