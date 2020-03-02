import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PastTenseWorksheet3Component } from './std02-past-tense-worksheet3.component';

describe('Std02PastTenseWorksheet3Component', () => {
  let component: Std02PastTenseWorksheet3Component;
  let fixture: ComponentFixture<Std02PastTenseWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PastTenseWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PastTenseWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
