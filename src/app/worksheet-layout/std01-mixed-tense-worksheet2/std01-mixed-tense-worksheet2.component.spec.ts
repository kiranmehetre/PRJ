import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01MixedTenseWorksheet2Component } from './std01-mixed-tense-worksheet2.component';

describe('Std01MixedTenseWorksheet2Component', () => {
  let component: Std01MixedTenseWorksheet2Component;
  let fixture: ComponentFixture<Std01MixedTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01MixedTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01MixedTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
