import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedVerbWorksheet2Component } from './std01-mixed-verb-worksheet2.component';

describe('Std01MixedVerbWorksheet2Component', () => {
  let component: Std01MixedVerbWorksheet2Component;
  let fixture: ComponentFixture<Std01MixedVerbWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedVerbWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedVerbWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
