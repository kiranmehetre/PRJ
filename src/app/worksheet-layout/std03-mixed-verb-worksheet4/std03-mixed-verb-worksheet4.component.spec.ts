import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedVerbWorksheet4Component } from './std03-mixed-verb-worksheet4.component';

describe('Std03MixedVerbWorksheet4Component', () => {
  let component: Std03MixedVerbWorksheet4Component;
  let fixture: ComponentFixture<Std03MixedVerbWorksheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedVerbWorksheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedVerbWorksheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
