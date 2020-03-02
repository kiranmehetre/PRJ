import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PresentTenseWorksheet3Component } from './std02-present-tense-worksheet3.component';

describe('Std02PresentTenseWorksheet3Component', () => {
  let component: Std02PresentTenseWorksheet3Component;
  let fixture: ComponentFixture<Std02PresentTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PresentTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PresentTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
