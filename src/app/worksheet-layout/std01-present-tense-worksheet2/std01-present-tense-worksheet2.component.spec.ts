import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PresentTenseWorksheet2Component } from './std01-present-tense-worksheet2.component';

describe('Std01PresentTenseWorksheet2Component', () => {
  let component: Std01PresentTenseWorksheet2Component;
  let fixture: ComponentFixture<Std01PresentTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PresentTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PresentTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
