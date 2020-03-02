import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedVerbWorksheet3Component } from './std03-mixed-verb-worksheet3.component';

describe('Std03MixedVerbWorksheet3Component', () => {
  let component: Std03MixedVerbWorksheet3Component;
  let fixture: ComponentFixture<Std03MixedVerbWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedVerbWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedVerbWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
