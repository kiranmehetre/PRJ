import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std03MixedTenseWorksheet2Component } from './std03-mixed-tense-worksheet2.component';

describe('Std03MixedTenseWorksheet2Component', () => {
  let component: Std03MixedTenseWorksheet2Component;
  let fixture: ComponentFixture<Std03MixedTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std03MixedTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std03MixedTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
