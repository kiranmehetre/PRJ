import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ProperNounsWorksheet2Component } from './std02-proper-nouns-worksheet2.component';

describe('Std02ProperNounsWorksheet2Component', () => {
  let component: Std02ProperNounsWorksheet2Component;
  let fixture: ComponentFixture<Std02ProperNounsWorksheet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ProperNounsWorksheet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ProperNounsWorksheet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
