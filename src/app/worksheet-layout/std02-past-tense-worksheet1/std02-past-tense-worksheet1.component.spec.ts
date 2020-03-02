import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PastTenseWorksheet1Component } from './std02-past-tense-worksheet1.component';

describe('Std02PastTenseWorksheet1Component', () => {
  let component: Std02PastTenseWorksheet1Component;
  let fixture: ComponentFixture<Std02PastTenseWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PastTenseWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PastTenseWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
