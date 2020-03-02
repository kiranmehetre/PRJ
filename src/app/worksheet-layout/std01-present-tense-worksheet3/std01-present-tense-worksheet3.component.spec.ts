import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std01PresentTenseWorksheet3Component } from './std01-present-tense-worksheet3.component';

describe('Std01PresentTenseWorksheet3Component', () => {
  let component: Std01PresentTenseWorksheet3Component;
  let fixture: ComponentFixture<Std01PresentTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std01PresentTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std01PresentTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
