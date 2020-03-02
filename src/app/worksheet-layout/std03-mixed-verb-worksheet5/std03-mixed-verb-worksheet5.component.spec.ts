import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedVerbWorksheet5Component } from './std03-mixed-verb-worksheet5.component';

describe('Std03MixedVerbWorksheet5Component', () => {
  let component: Std03MixedVerbWorksheet5Component;
  let fixture: ComponentFixture<Std03MixedVerbWorksheet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedVerbWorksheet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedVerbWorksheet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
