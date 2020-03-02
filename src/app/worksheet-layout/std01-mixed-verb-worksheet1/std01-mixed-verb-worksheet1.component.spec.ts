import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedVerbWorksheet1Component } from './std01-mixed-verb-worksheet1.component';

describe('Std01MixedVerbWorksheet1Component', () => {
  let component: Std01MixedVerbWorksheet1Component;
  let fixture: ComponentFixture<Std01MixedVerbWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedVerbWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedVerbWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
