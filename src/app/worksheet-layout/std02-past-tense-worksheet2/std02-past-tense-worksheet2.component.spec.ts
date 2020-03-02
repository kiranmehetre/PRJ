import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02PastTenseWorksheet2Component } from './std02-past-tense-worksheet2.component';

describe('Std02PastTenseWorksheet2Component', () => {
  let component: Std02PastTenseWorksheet2Component;
  let fixture: ComponentFixture<Std02PastTenseWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02PastTenseWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02PastTenseWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
