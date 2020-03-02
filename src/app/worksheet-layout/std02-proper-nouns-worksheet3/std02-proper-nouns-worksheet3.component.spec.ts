import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Std02ProperNounsWorksheet3Component } from './std02-proper-nouns-worksheet3.component';

describe('Std02ProperNounsWorksheet3Component', () => {
  let component: Std02ProperNounsWorksheet3Component;
  let fixture: ComponentFixture<Std02ProperNounsWorksheet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Std02ProperNounsWorksheet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Std02ProperNounsWorksheet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
