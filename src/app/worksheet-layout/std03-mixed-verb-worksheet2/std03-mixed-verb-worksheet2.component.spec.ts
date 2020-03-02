import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedVerbWorksheet2Component } from './std03-mixed-verb-worksheet2.component';

describe('Std03MixedVerbWorksheet2Component', () => {
  let component: Std03MixedVerbWorksheet2Component;
  let fixture: ComponentFixture<Std03MixedVerbWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedVerbWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedVerbWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
