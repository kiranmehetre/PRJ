import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PresentTenseWorksheet2Component } from './std02-present-tense-worksheet2.component';

describe('Std02PresentTenseWorksheet2Component', () => {
  let component: Std02PresentTenseWorksheet2Component;
  let fixture: ComponentFixture<Std02PresentTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PresentTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PresentTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
