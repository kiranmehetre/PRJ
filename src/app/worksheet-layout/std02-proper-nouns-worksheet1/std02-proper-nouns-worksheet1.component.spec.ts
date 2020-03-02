import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ProperNounsWorksheet1Component } from './std02-proper-nouns-worksheet1.component';

describe('Std02ProperNounsWorksheet1Component', () => {
  let component: Std02ProperNounsWorksheet1Component;
  let fixture: ComponentFixture<Std02ProperNounsWorksheet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ProperNounsWorksheet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ProperNounsWorksheet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
